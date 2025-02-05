import { getNewById } from '@/actions/news.action'
import NewsForm from '@/components/NewsForm'

async function EditNewsPage({ params }: { params: { id: string } }) {
  if (!params.id) return <div>News not found</div>
  const response = await getNewById(Number(params.id))

  if (!response?.data) return <div>News not found</div>

  return (
    <div className="p-8 flex justify-center items-center">
      <NewsForm news={response?.data} />
    </div>
  )
}

export default EditNewsPage
