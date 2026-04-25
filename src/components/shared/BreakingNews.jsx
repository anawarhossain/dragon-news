import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breking News: Major Event Unfolds in the city",
  },
  {
    _id: "2",
    title: "Breking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breking News: Sports Team Wins Championship",
  },
  {
    _id: "4",
    title: "Breking News: Dhaka Loadshiding",
  },
];

const BreakingNews = () => {
  return (
    <div className="py-2 bg-gray-100 rounded-lg flex justify-between gap-2">
      <button className="bg-red-500 text-white px-2 py-1 ml-2 rounded-lg">
        Latest
      </button>
      <Marquee pauseOnHover={true} >
        {news.map((n) => {
          return (<span className="mr-20" key={n._id}>{n.title}</span>);
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
