import { getTestimonial } from "@/actions/home.action"
import TestimonialForm from "@/components/TestimonialForm"

async function TestimonialConfig() {
    
    const response = await getTestimonial()

   

    // if(!response)return null;

    return <div className="p-8 flex justify-center items-center flex-col">
        <TestimonialForm  testimonialData={response}/>
    </div>
}

export default TestimonialConfig