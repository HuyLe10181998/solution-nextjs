"use client"
import { useEffect, useState } from "react"
import FormItem from "./ui/form-item"
import FormItemUpload from "./ui/form-item-upload"
import toast from "react-hot-toast"
import {  updateService } from "@/actions/home.action"
import {  ServiceData, ServiceItem } from "@/models/service.model"
import Service from "./Service"

function ServiceForm({serviceData}:{serviceData:ServiceData}){

    const [services,setServices] = useState<ServiceItem[]>(serviceData?.services || [])
    const [preview,setPreview] = useState<boolean>(false)
    const onChange = (e:any,id:number | string,name:string)=>{
        
        
        setServices((prev)=>{
            const newService = [...prev];
            newService.forEach((service)=>{
                if(service.id === id){
                    (service as any)[name] = e?.target?.value || e
                }
            })
            return newService
        })
    }

    const checkService = ()=>{
        return services.every((service)=>{
            return typeof service.description === 'string' && typeof service.image === 'string' && typeof service.title === 'string' && typeof service.link === 'string'
        })
    }

    const handleAddService = ()=>{
        setServices((prev)=>{
            return [...prev,{
                 image: "",
                 link: "",
                 title: "",
                 description: "",
                id: Date.now().toString(),
            } as ServiceItem]
        })
    }
    const handleRemoveService = (id:number | string)=>{
        setServices((prev)=>{
            return prev.filter((service)=>service.id !== id)
        })
    }
    const handleSaveAll = async()=>{
        if(!checkService()){
            toast.error("Please fill all the fields")
            return;
        }
        const res = await updateService({...serviceData,services})
        if("error" in res){
            toast.error(res.error || "Something went wrong")
        }else{
            toast.success("Service section updated successfully")
        }
    }

    return <div className={`${!preview && "text-center"}`}>
        <div className="flex gap-8 justify-center items-center mb-8">
         <h3 className="text-2xl font-bold">Service Config</h3>

        <div onClick={()=>setPreview(!preview)} className="relative text-center cursor-pointer px-4 py-2  md:px-6 md:py-3 font-bold text-black group"><span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span> <span className="absolute inset-0 w-full h-full border-4 border-black"></span> <span className="relative text-xs md:text-[18px]">{preview ? "Turn off preview" : "Preview"}</span></div>

        

        </div>
        {preview ? (
            <div className="max-w-[100vw] bg-white rounded-lg p-4">
            <Service data={serviceData} />
            </div>
        ) : (
            <>
              
            {services?.map((service,index)=>{
                return (
                 <div 
                 className="relative mt-6 max-w-[900px] mb-8 inline-block text-primary-text w-full rounded-xl !bg-white p-8 shadow lg:mt-0 md:text-center text-left"
               >
                 <h2 className="break-normal pb-8 font-sans text-xl font-bold text-gray-700 text-center">
                   Service {index+1}
                 </h2>
                 <FormItemUpload id={service.id} label="Image:" name="image"  value={service.image} onChange={(e)=>{
                     console.log('slide',service)
                     onChange(e,service.id,"image")
                 }} />
                 <FormItem label="Title" name="title" type="text" placeholder="Type title" value={service.title} onChange={(e)=>{
                     onChange(e,service.id,"title")
                 }} />
                 <FormItem label="Description" name="description" type="textarea" placeholder="Type description" value={service.description} onChange={(e)=>{
                     onChange(e,service.id,"description")
                 }} />
                 <FormItem label="Link" name="link" type="text" placeholder="Type link" value={service.link} onChange={(e)=>{
                     onChange(e,service.id,"link")
                 }} />
    
 
 
 
             <button type="button" className="mt-4 rounded bg-red-500 px-4 py-1 text-white" onClick={()=>handleRemoveService(service.id)}>Remove Service</button>
             
             
              
             
                
              
              
             
              
             
             
               </div>
             )
         })}
 
         <div className="flex gap-4 items-center justify-center">
         <button type="button" className="mt-4 rounded bg-blue-500 px-4 py-2 text-white" onClick={handleAddService}>Add Service</button>
         <button type="button" className="mt-4 rounded bg-green-500 px-4 py-2 text-white" onClick={handleSaveAll}>Save All</button>
         </div>
            </>
        )}
     
    </div>
        
}

export default ServiceForm