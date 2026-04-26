import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="card w-full bg-base-100 border rounded-lg overflow-hidden mb-6">
      {/* Content Section */}
      <div className="p-4 space-y-4">
        <figure className="relative h-64 w-full">
          <Image
            src={news.image_url}
            alt="News Thumbnail"
            fill
            className="object-cover w-full rounded-md"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </figure>
        <h2 className="card-title text-xl font-bold leading-tight">
          {news.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">{news?.details}</p>
        <Link href={`/category/${news.category_id}`}>
          <button className="btn justify-center items-center bg-red-500 text-white ">
            <BiLeftArrowAlt /> All news in this category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
