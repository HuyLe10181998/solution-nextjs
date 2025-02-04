import { getService } from "@/actions/home.action"
import ServiceForm from "@/components/ServiceForm"

async function ServiceConfig() {
    
    const response = await getService()

    if(!response)return null;

    return <div className="p-8 flex justify-center items-center flex-col">
        <ServiceForm  serviceData={response}/>
    </div>
}

export default ServiceConfig