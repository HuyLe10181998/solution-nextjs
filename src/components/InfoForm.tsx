'use client'
import { updateDataInfo } from "@/actions/info.action"
// import { updateHeaderData } from "@/actions/info.action"
import { FormEvent, useState } from "react"
import { InfoData } from "@/models/common.model"
import FormItem from "./ui/form-item"
import toast from "react-hot-toast"
import SpinLoading from "./ui/spin-loading"
import ButtonSave from "./ui/button-save"
import FormItemUpload from "./ui/form-item-upload"




function InfoForm({infoData}:{infoData:InfoData }){
     const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        setIsLoading(true)
        e.preventDefault()
        
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
    
        try {
          const result = await updateDataInfo(data)
          if (result.error) {
            console.error('Error updating header:', result.error)
            toast.error(result.error || 'Something went wrong')
            // Handle error (you may want to show an error message to the user)
          } else {
            toast.success('Header updated successfully')
          }
        } catch (error) {
          console.error('Failed to update data', error)
          toast.error('Failed to update data')
        }finally{
            setIsLoading(false)
        }
      }

    return   <form onSubmit={handleSubmit}
    className="relative mt-6 max-w-[900px] inline-block text-primary-text w-full rounded-xl !bg-white p-8 shadow lg:mt-0 md:text-center text-left"
  >
    {isLoading && <SpinLoading />}
    <h2 className="break-normal pb-8 font-sans text-xl font-bold text-gray-700 text-center">
      Information
    </h2>
    <FormItem label="Email" name="email" type="email" placeholder="info@example.com" value={infoData.email} onChange={() => {}} />


    <FormItem label="Address" name="address" type="text" placeholder="Ex: 55 Main Street, 2nd block, Malborne ,Australia" value={infoData.address} onChange={() => {}} />

    <FormItem label="Phone Number Display" name="phoneNumberDisplay" type="text" placeholder="Ex: +236 (456) 896 22" value={infoData.phoneNumberDisplay} onChange={() => {}} />

    <FormItem label="Phone Number" name="phoneNumber" type="text" placeholder="Ex: +23645689622" value={infoData.phoneNumber} onChange={() => {}} />



  
    <FormItem label="Working Days" name="workingDays" type="text" placeholder="Ex: Monday to Friday" value={infoData.workingDays} onChange={() => {}} />
  
   <FormItem label="Start Time" name="startTime" type="text" placeholder="Ex: 9.30 am" value={infoData.startTime} onChange={() => {}} />

 <FormItem label="End Time" name="endTime" type="text" placeholder="Ex: 6.30 pm" value={infoData.endTime} onChange={() => {}} />
    <FormItem label="Map URL" name="mapUrl" type="text" placeholder="Google map" value={infoData.mapUrl} onChange={() => {}} />

        <FormItemUpload label="Logo URL(120x60)" name="logo"  value={infoData.logo} onChange={() => {}} />
 
  <FormItem label="Facebook Link" name="facebookLink" type="text" placeholder="Ex: https://example.com" value={infoData.facebookLink} onChange={() => {}} />

  <FormItem label="Twitter Link" name="twitterLink" type="text" placeholder="Ex: https://example.com" value={infoData.twitterLink} onChange={() => {}} />

  <FormItem label="Printerest Link" name="printerestLink" type="text" placeholder="Ex: https://example.com" value={infoData.printerestLink} onChange={() => {}} />

 <ButtonSave />
 


  </form>
}

export default InfoForm;