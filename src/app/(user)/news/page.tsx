import { FacebookIcon, InstagramIcon, SearchIcon } from "@/assets/icons";
import PostList from "@/components/PostList";
import SearchNews from "@/components/SearchNews";


function News({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.limit) || 10;
    const search = searchParams?.search || "";
 

    return  <div className="">
        <div 
            className="breadcrumb-wrapper !px-20 section-padding bg-cover" 
            style={{ backgroundImage: "url('/assets/img/news-bg.jpg')" }}
        >
            <div className="container mx-auto">
                <div className="page-heading">
                    <h1 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s"
                    >
                        News
                    </h1>
                 
                </div>
            </div>
        </div>
  
        <div className="flex gap-8 px-20 lg:py-20 py-10 news-area">
          <div className="w-full lg:w-[60%]">
            <PostList searchParams={{ page, limit,search }} />
          </div>
          <div className="flex-1 lg:block hidden">
            <div className="main-sidebar flex flex-col gap-8">
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Search</h3>
                </div>
                <div className="search_widget">
                  <SearchNews />
             
                </div>
              </div>

              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Popular Feeds</h3>
                </div>
                <div className="popular-posts">
                  <div className="single-post-item">
                    <div 
                      className="thumb bg-cover" 
                      style={{ backgroundImage: "url('/assets/img/news/pp1.jpg')" }}
                    />
                    <div className="post-content">
                      <h5><a href="/news">Visa Application Fee Increases From July 2024</a></h5>
                      <div className="post-date">
                        <i className="far fa-calendar-alt"></i>
                        24th March 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Never Miss News</h3>
                </div>
                <div className="social-link">
                  <a href="#" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                
                </div>
              </div> */}
            </div>
          </div>
        
        </div>
      </div>;
}

export default News;