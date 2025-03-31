"use client"

import { getJobList } from "@/actions/auth.action"
import { Button } from "./ui/button"
import { transformJobData } from "@/lib/utils"
import { updateJobs } from "@/actions/job.action"
import { useState } from "react"
import toast from "react-hot-toast"


export function UpdateJobBtn(){
  const [isLoading,setIsLoading] = useState(false)
  const update = async ()=> {
    setIsLoading(true)
    try{ 
      const jobs = await getJobList()
      const jobData = transformJobData(jobs)
      await updateJobs(jobData)
      toast.success("Update successfully!")
    }catch(e){
      toast.error('Failed to update!')
    }finally{
      setIsLoading(false)
    }
  }
    return     <Button  onClick={update}>
        {isLoading ?  "Loading..." : "Update Jobs"}
      </Button>
}