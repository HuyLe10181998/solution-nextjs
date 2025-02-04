"use client"
import Link from "next/link";
import { CalendarIcon, MessageIcon } from "@/assets/icons";
import { formatDate } from "@/lib/utils";
import { DeleteAlertDialog } from "./DeleteAlertDialog";
function PostListItem({post, isAdmin = false}: {post: any , isAdmin? : boolean}) {
    const handleDelete = async () => {
        // const response = await deletePost(post.id)
        // if("error" in response){
        //     toast.error('Failed to delete post')
        // }else{
        //     toast.success('Post deleted successfully')
        //     router.refresh()
        // }
    }
    return (
        <div className="single-blog-post mt-12">
           {!isAdmin && (
              <div 
              className={`post-featured-thumb bg-cover ${post.thumb ? '!min-h-[300px]' : ''}`} 
              style={{backgroundImage: `url(${post.thumb})`}}
          />
           )}
            <div className="post-content">
                <div className="post-meta flex items-center gap-4">
                    <span className="flex items-center gap-2"><MessageIcon />{post.author}</span>
                    <span className="flex items-center gap-2"><CalendarIcon />{formatDate(post.date)}</span>
                </div>
                <h3 className="title-anim">
                    <Link href={`/news/${post.id}`}>{post.title}</Link>
                </h3>
                <p>
                    {post.description}
                </p>
                {isAdmin ? (
  <div className="flex gap-2">
  <Link className="theme-btn !bg-blue-500 !rounded-lg !px-8 !py-2 mt-4 line-height" href={`/admin/news/edit/${post.id}`}>
      <span>Edit</span>
  </Link>

  <DeleteAlertDialog isDeleting={false} onDelete={() => handleDelete()} />
</div>
                ) : (
                    <Link className="theme-btn mt-4 line-height" href={`/news/${post.id}`}>
                    <span>READ MORE <i className="fas fa-chevron-right"></i></span>
                </Link>
                )}
              

              
            </div>
        </div>
    );
}

export default PostListItem;