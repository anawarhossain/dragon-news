import LeftSidebar from "@/components/homepage/LeftSidebar";
import { CategoryFetch, NewsFetchByCategory } from "@/lib/dataFetch";

import NewsCard from "../../../../components/homepage/NewsCard";
import RightSidebar from "@/components/homepage/RightSidebar";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  const data = await CategoryFetch();
  const news_category = data?.news_category || [];
  // console.log(news_category, "data");

  const Categoriesdata = await NewsFetchByCategory({ category_id: id });

  console.log(Categoriesdata);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">
      {/* Left side: Categories */}
      <aside className="lg:col-span-3 py-4">
        <h1 className="text-xl font-bold mb-4 text-left">All Categories</h1>
        <nav className="flex flex-col gap-2">
          {news_category.map((category) => (
            <LeftSidebar
              category={category}
              key={category.category_id}
              activeId={id}
            />
          ))}
        </nav>
      </aside>

      {/* Middle: News */}
      <main className="lg:col-span-6 py-4">
        <h2 className="text-xl font-bold mb-4 text-left">Dragon News Home</h2>
        {/* নিউজ কার্ড এখানে আসবে */}
        <div>
          {Categoriesdata.length > 0 ? (
            <div>
              {Categoriesdata.map((news) => {
                return (
                  <div key={news._id}>
                    <NewsCard news={news} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center items-center h-80">
              <h1 className="font-bold text-2xl">This category no News</h1>
            </div>
          )}
        </div>
      </main>

      {/* Right side: Login/Socials */}
      <aside className="lg:col-span-3 py-4">
        <h2 className="text-xl font-bold mb-4 text-left">Login With</h2>
        {/* রাইট সাইড কন্টেন্ট */}
        <RightSidebar/>
      </aside>
    </div>
  );
};

export default NewsCategoryPage;
