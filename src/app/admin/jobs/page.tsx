import { getJobs } from '@/actions/job.action'
import JobCard from '@/components/JobCard'
import Pagination from '@/components/Pagination'
import Link from 'next/link'

export const revalidate = 0

async function Job({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 10
  const data = await getJobs(page, limit)
  return (
    <div className="py-8 lg:px-24 px-16 ">
      <div className="flex gap-4 items-center justify-center">
        <h2 className="font-bold text-2xl lg:text-3xl ">Current offerings</h2>
        <Link
          className="theme-btn !px-8 !py-4 !bg-blue-500 !rounded-lg"
          href="/admin/jobs/add"
        >
          <span>Add Job +</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {data?.jobs?.map((job: any) => <JobCard key={job.id} job={job} />)}
      </div>

      <div className="mt-8">
        <Pagination
          currentPage={page}
          totalPages={data?.totalPages}
          limit={limit}
        />
      </div>
    </div>
  )
}

export default Job
