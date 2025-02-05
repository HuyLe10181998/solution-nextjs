import { getJobById } from '@/actions/job.action'
import JobForm from '@/components/JobForm'
async function EditJobPage({ params }: { params: { id: string } }) {
  if (!params.id) return <div>Job not found</div>
  const job = await getJobById(Number(params.id))
  return (
    <div className="container w-full mx-auto px-4 md:px-16 py-4 md:py-8 text-center">
      <JobForm job={job} />
    </div>
  )
}

export default EditJobPage
