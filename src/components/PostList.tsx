import { getNews } from "@/actions/news.action";
import PostListItem from "./PostListItem";
import Pagination from "./Pagination";

async function PostList({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined | number };
}) {
    // Get page and limit from searchParams, with defaults
    const page = Number(searchParams?.page);
    const limit = Number(searchParams?.limit);

  
    
    const data= await getNews(page, limit);

    const {blogs,totalPages} = data;

    

    if(!blogs?.length) return null;
    return (
        <div className="flex flex-col gap-12">
            {blogs?.map((post: any) => (
                <PostListItem key={post.id} post={post} />
            ))}

      <Pagination
    currentPage={page} 
    totalPages={totalPages} 
    limit={limit}
 
/>

        </div>
    )
}

export default PostList; 