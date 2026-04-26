import NewsDetailsCard from "@/components/detailsNews/NewsDetailsCard";
import { DetailsNewsFetchById } from "@/lib/dataFetch";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "details params");

  const detailNews = await DetailsNewsFetchById({ news_id: id });
  console.log(detailNews);

  return (
    <div>
      {detailNews.map((news) => {
        return (
          <div key={news._id}>
            <NewsDetailsCard news={news} />
          </div>
        );
      })}
    </div>
  );
};

export default NewsDetailsPage;
