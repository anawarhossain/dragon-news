import NewsDetailsCard from "@/components/detailsNews/NewsDetailsCard";
import RightSidebar from "@/components/homepage/RightSidebar";
import { DetailsNewsFetchById } from "@/lib/dataFetch";
import React from "react";


export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  const detailNews = await DetailsNewsFetchById({ news_id: id });

  // console.log (detailNews[0])

  return {
    title: detailNews[0].title,
  };
}



const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
//   console.log(id, "details params");

  const detailNews = await DetailsNewsFetchById({ news_id: id });
//   console.log(detailNews);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="lg:col-span-3">
        <h2 className="text-xl font-bold mb-4 text-left">Dragon News</h2>
        {detailNews.map((news) => {
          return (
            <div key={news._id}>
              <NewsDetailsCard news={news} />
            </div>
          );
        })}
      </div>
      <div className="col-span-1 ">
        <h2 className="text-xl font-bold mb-4 text-left">Login With</h2>
        <div className="">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
