"use client"
import { Job } from "@/models/job.model";
import toast from "react-hot-toast";
import { deleteJob } from "@/actions/job.action";
import { DeleteAlertDialog } from "./DeleteAlertDialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
function JobCard({job}: {job: Job}) {
    const router = useRouter()
    const handleDelete = async () => {
        const response = await deleteJob(job.id)
        if("error" in response){
            toast.error('Failed to delete job')
        }else{
            toast.success('Job deleted successfully')
            router.refresh()
        }
    }
    return (
        <>
           <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-900 p-8 flex justify-between items-center">
                <h2 className="text-lg text-white font-semibold">{job.job} - {job.place}</h2>
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">{job.spot}</span>
            </div>
            <div className="p-4">
                <div className="mb-2 flex flex-col gap-4">
                    <p className="font-semibold">Salary: {job.salary}</p>
                    <p>Estimated LC Filing Date: {job.estimatedFilingDate}</p>
                    <p>{job.place}</p>
                </div>
                <div className="flex gap-2">
                    <Link className="theme-btn !bg-blue-500 !rounded-lg !px-8 !py-2 mt-4 line-height" href={`/admin/jobs/edit/${job.id}`}>
                        <span>Edit</span>
                    </Link>
                  
                    <DeleteAlertDialog isDeleting={false} onDelete={() => handleDelete()} />
                </div>
            </div>
       
        </div>
       
        </>
     
    );
}

export default JobCard;