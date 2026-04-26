import React from "react";
import Image from "next/image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import Link from "next/link";

const NewsCard = ({ news }) => {
    return (
    <div className="card w-full bg-base-100 border rounded-lg overflow-hidden mb-6">
      {/* Author Section */}
      <div className="flex justify-between items-center bg-gray-50 p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <Image
                src={news.author.img}
                alt={"Author"}
                fill
                className="rounded-full"
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
          {news?.details?.length > 250 ? (
            <>
              {news.details?.slice(0, 250)}...{" "}
              <Link
                href={`/news/${news._id}`}
                className="text-orange-500 font-bold cursor-pointer"
              >
                Read More
              </Link>
            </>
          ) : (
            <>{news.details}</>
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
                    i < Math.floor(news.rating.number) ? "currentColor" : "none"
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
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
