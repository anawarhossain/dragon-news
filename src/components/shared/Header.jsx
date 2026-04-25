import React from "react";
import ImageLogo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).formatToParts(new Date());

  return (
    <div className="flex flex-col justify-center items-center py-8 space-y-3">
      <Image src={ImageLogo} alt="The drogon news logo" />
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      {/* <h1 className='font-bold'>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h1> */}
      <h1 className="">
        {parts.map((part, index) =>
          part.type === "weekday" ? (
            <strong key={index}>{part.value}</strong>
          ) : (
            <span key={index}>{part.value}</span>
          ),
        )}
      </h1>
    </div>
  );
};

export default Header;
