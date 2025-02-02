import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, MessageIcon } from "@/assets/icons";
import { formatDate } from "@/lib/utils";
function PostListItem({post}: {post: any}) {
    return (
        <div className="single-blog-post mt-12">
            <div 
                className={`post-featured-thumb bg-cover ${post.thumb ? '!min-h-[300px]' : ''}`} 
                style={{backgroundImage: `url(${post.thumb})`}}
            />
            <div className="post-content">
                <div className="post-meta flex items-center gap-4">
                    <span className="flex items-center gap-2"><MessageIcon />{post.author}</span>
                    <span className="flex items-center gap-2"><CalendarIcon />{formatDate(post.date)}</span>
                </div>
                <h2 className="title-anim">
                    <Link href={`/news/${post.id}`}>{post.title}</Link>
                </h2>
                <p>
                    {post.description}
                </p>
                <Link className="theme-btn mt-4 line-height" href={`/news/${post.id}`}>
                    <span>READ MORE <i className="fas fa-chevron-right"></i></span>
                </Link>
            </div>
        </div>
    );
}

export default PostListItem;