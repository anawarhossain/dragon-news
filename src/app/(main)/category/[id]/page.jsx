import LeftSidebar from "@/components/homepage/LeftSidebar";
import { CategoryFetch, NewsFetchByCategory } from "@/lib/dataFetch";
import Image from "next/image";
import {
  FaEye,
  FaRegBookmark,
  FaRegEye,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";

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
      <aside className="lg:col-span-3">
        <h1 className="text-xl font-bold mb-4 text-left">All Categories</h1>
        <nav className="flex flex-col gap-2">
          {news_category.map((category) => (
            <LeftSidebar
              category={category}
              key={category.category_id}
              activeId={4}
            />
          ))}
        </nav>
      </aside>

      {/* Middle: News */}
      <main className="lg:col-span-6 p-4">
        <h2 className="font-semibold">Dragon News Home</h2>
        {/* নিউজ কার্ড এখানে আসবে */}
        <div>
          {Categoriesdata.map((news) => {
            return (
              <div
                key={news._id}
                className="card w-full bg-base-100 border rounded-lg overflow-hidden mb-6"
              >
                {/* Author Section */}
                <div className="flex justify-between items-center bg-gray-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <Image
                          src={news.author.img}
                          alt={news.author.name}
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{news.author.name}</h4>
                      <p className="text-xs text-gray-500">
                        {news.author.published_date?.split(" ")[0]}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-4">
                  <h2 className="card-title text-xl font-bold leading-tight">
                    {news.title}
                  </h2>

                  <figure className="relative h-64 w-full">
                    <Image
                      src={news.image_url}
                      alt="News Thumbnail"
                      fill
                      className="object-cover w-full rounded-md"
                    />
                  </figure>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {news.details.length > 250 ? (
                      <>
                        {news.details.slice(0, 250)}...{" "}
                        <span className="text-orange-500 font-bold cursor-pointer">
                          Read More
                        </span>
                      </>
                    ) : (
                      details
                    )}
                  </p>

                  <hr className="border-gray-200" />

                  {/* Footer Section */}
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-2">
                      <div className="flex text-orange-400 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            fill={
                              i < Math.floor(news.rating.number)
                                ? "currentColor"
                                : "none"
                            }
                            stroke="currentColor"
                          />
                        ))}
                      </div>
                      <span className="font-medium text-gray-600">
                        {news.rating.number}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                      <FaRegEye />
                      <span>{news.total_view}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Right side: Login/Socials */}
      <aside className="lg:col-span-3">
        <h2 className="font-semibold mb-4">Login With</h2>
        {/* রাইট সাইড কন্টেন্ট */}
      </aside>
    </div>
  );
};

export default NewsCategoryPage;
