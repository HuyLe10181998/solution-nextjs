import { getNewById, getPopularNews } from '@/actions/news.action'
import { CalendarIcon, UserIcon } from '@/assets/icons'
import ChatAction from '@/components/ChatAction'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  if (!id) return null
  const post = await getNewById(Number(id))
  const popularNews = await getPopularNews()
  console.log('popularNews',popularNews)
  if (!post) return null
  return (
    <div className="">
      <div
        className="breadcrumb-wrapper section-padding bg-cover"
        style={{
          backgroundImage:
            "url('https://api-solution-production.up.railway.app/uploads/1734686032558.png')",
        }}
      >
        <div className="container mx-auto">
          <div className="page-heading">
            <h1
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: 'visible',
                animationDelay: '0.3s',
                animationName: 'fadeInUp',
              }}
            >
              News
            </h1>
          </div>
        </div>
      </div>

      <section className="blog-wrapper news-wrapper section-padding lg:!pt-10 !pt-4 border-bottom">
        <div className="container mx-auto">
          <div className="news-area">
            <div className="flex lg:flex-row flex-col gap-4">
              <div className="w-full lg:w-[60%]">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content !pt-0">
                      <h2 className="mt-0 title-anim">{post?.data?.title}</h2>
                      <div className="post-meta mt-3 flex items-center gap-2">
                        <span className="!flex items-center gap-2">
                          <UserIcon />
                          {post?.data?.author}
                        </span>
                        <span className="!flex items-center gap-2">
                          <CalendarIcon />
                          {formatDate(post?.data?.date)}
                        </span>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post?.data?.content,
                        }}
                        className="w-full blog-content"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:flex-1">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Feeds</h3>
                    </div>
                    <div className="popular-posts">
                      {
                        popularNews?.map((news: any) => {
                          return     <div className="single-post-item">
                          <div
                            className="thumb bg-cover"
                            style={{
                              backgroundImage: `url('${news?.thumb}')`,
                            }}
                          ></div>
                          <div className="post-content">
                            <h5>
                              <Link href={`/news/${news.id}`}>
                                {news.title}
                              </Link>
                            </h5>
                            <div className="post-date">
                              {formatDate(news.date)}
                            </div>
                          </div>
                        </div>
                        })
                      }
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChatAction />
    </div>
  )
}
