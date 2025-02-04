import { getNews } from "@/actions/news.action";
import InputSearch from "@/components/InputSearch";
import Pagination from "@/components/Pagination";
import PostListItem from "@/components/PostListItem";
import Link from "next/link";

async function NewsPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}){
    const page = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.limit) || 10;
    const search = searchParams?.search || '';
  const data = await getNews(page,limit,search as string)
 
    return <div className="p-8">
        <div className="flex gap-4 mb-8 justify-center"><h1 className="!text-4xl text-center">News List</h1></div>
        <div className="flex gap-2 max-w-[600px] mx-auto mb-6">
            <InputSearch />
            <button className="bg-blue-500 min-w-[120px] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                <Link className="text-neutral-50" href="/admin/news/add">
                    Add news +
                </Link>
            </button>
        </div>

        <div className="flex flex-wrap gap-8">
            {data?.blogs?.map((blog:any)=>{
                return <div className="!max-w-[500px]" key={blog.id}>
                    <PostListItem key={blog.id} post={blog} isAdmin={true} />
                </div>
            })}

        </div>
       <div className="mt-12">
       <Pagination
    currentPage={page} 
    totalPages={data?.totalPages} 
    limit={limit}
 
/>
       </div>
    

    </div>
}

export default NewsPage;