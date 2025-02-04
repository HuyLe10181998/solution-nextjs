import {  getInfo } from "@/actions/info.action"
import InfoForm from "@/components/InfoForm"

async function AdminPage() {

const infoData = await getInfo('admin')


  return (
    <div className="container w-full mx-auto px-4 md:px-16 py-4 md:py-8 text-center">
      <InfoForm infoData={infoData} />
    </div>
  
  )
}

export default AdminPage