'use client'
import { FormEvent, useState } from "react"
import FormItem from "./ui/form-item"
import toast from "react-hot-toast"
import SpinLoading from "./ui/spin-loading"
import ButtonSave from "./ui/button-save"
import { Job } from "@/models/job.model"
import { usePathname, useRouter } from "next/navigation"
import { createJob, updateJob } from "@/actions/job.action"




function JobForm({job}:{job?:Job }){
     const [isLoading, setIsLoading] = useState(false)
     const pathName = usePathname()
     const router = useRouter()
     const isEdit = pathName.includes('edit')

    async function handleJob(e: FormEvent<HTMLFormElement>) {
        setIsLoading(true)
        e.preventDefault()
        let result;
        
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
    
        try {
          if(isEdit){
            if(!job?.id){
                toast.error('Job not found')
                return
            }
            result = await updateJob(job?.id,data)
          }else{
            result = await createJob(data)
          }
          if (result.error) {
            console.error('Error:', result.error)
            toast.error(result.error || 'Something went wrong')
            // Handle error (you may want to show an error message to the user)
          } else {
            if(isEdit){
                toast.success('Job updated successfully')
                router.refresh()
            }else{
                toast.success('Job created successfully') 
                 router.push('/admin/jobs')

            }
          }
        } catch (error) {
          console.error('Failed to create job', error)
        }finally{
            setIsLoading(false)

        }
      }


      

    
      

    return   <form onSubmit={handleJob}
    className="relative mt-6 max-w-[900px] inline-block text-primary-text w-full rounded-xl !bg-white p-8 shadow lg:mt-0 md:text-center text-left"
  >
    {isLoading && <SpinLoading />}
    <h2 className="break-normal pb-8 font-sans text-xl font-bold text-gray-700 text-center">
      {isEdit ? 'Edit Job' : 'Create Job'}
    </h2>
    <FormItem label="Name" name="job" type="text" placeholder="Ex: Crew Member" value={job?.job || ''} onChange={() => {}} />


    <FormItem label="Salary" name="salary" type="text" placeholder="Ex: 10/h" value={job?.salary || ''} onChange={() => {}} /> 

    <FormItem label="Salary VND (4 tuần)" name="salaryVND" type="text" placeholder="Ex: 40728000" value={String(job?.salaryVND || '')} onChange={() => {}} />

    <FormItem label="Estimated LC filing date" name="estimatedFilingDate" type="date" placeholder="Enter filing date" value={job?.estimatedFilingDate ? new Date(job?.estimatedFilingDate) : new Date()} onChange={() => {}} />



    <FormItem label="Place" name="place" type="text" placeholder="Ex: Hanoi, Vietnam" value={job?.place || ''} onChange={() => {}} />  

  
        <FormItem label="Remaining Spot" name="spot" type="number" placeholder="Enter remaining spot" value={job?.spot || ''} onChange={() => {}} />

    <FormItem label="Job Description" name="jobDescription" type="textarea" placeholder="Enter job description" value={job?.jobDescription || ''} onChange={() => {}} />
  
   <FormItem label="Company" name="company" type="text" placeholder="Ex: 9.30 am" value={job?.company || ''} onChange={() => {}} />      

 <FormItem label="Benefit" name="benefit" type="text" placeholder="Enter benefits (if any)" value={job?.benefit || ''} onChange={() => {}} />
      <FormItem label="Note" name="note" type="text" placeholder="Enter note" value={job?.note || ''} onChange={() => {}} />  

   

 <ButtonSave />
 


  </form>
}

export default JobForm;