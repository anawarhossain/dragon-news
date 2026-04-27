'use client'
import Image from "next/image";
import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { GrGithub, GrGoogle } from "react-icons/gr";
import SwimmingImage from "@/assets/swimming.png";
import ClassImage from "@/assets/class.png";
import GroudndImage from "@/assets/playground.png";
import { authClient } from "@/lib/auth-client";

const RightSidebar = () => {


  const googleLoginHandle = async() => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
      console.log(data)
  };
  const GithubLoginHandle = async() => {
      const data = await authClient.signIn.social({
        provider: "github",
      });
      console.log(data)
  };
  

  return (
    <div className="space-y-5">
      <div>
        <button
          onClick={googleLoginHandle}
          className="btn w-full bg-white text-sky-400 border-sky-400"
        >
          <GrGoogle /> Login with Google{" "}
        </button>
        <button
          onClick={GithubLoginHandle}
          className="btn w-full bg-white border-black mt-3"
        >
          <GrGithub /> Login with Github{" "}
        </button>
      </div>

      <div>
        <h1 className="text-xl mb-4 text-left">Find Us On</h1>
        <div className="">
          <ul className="text-left">
            <li className="btn py-6 flex bg-white items-center gap-2">
              <CiFacebook className="text-blue-400 text-2xl" />
              FaceBook
            </li>
            <li className="btn py-6 flex bg-white items-center gap-2">
              <CiTwitter className="text-blue-400 text-2xl" />
              Twitter
            </li>
            <li className="btn py-6 flex bg-white items-center gap-2">
              <CiInstagram className="text-blue-400 text-2xl" />
              Instagram
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 py-4 rounded-md">
        <h1 className="text-xl mb-4 px-4 text-left">Q-Zone</h1>
        <div className="space-y-6">
          <Image className="mx-auto" src={SwimmingImage} alt="Swimming" />
          <Image className="mx-auto" src={ClassImage} alt="Swimming" />
          <Image className="mx-auto" src={GroudndImage} alt="Swimming" />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
