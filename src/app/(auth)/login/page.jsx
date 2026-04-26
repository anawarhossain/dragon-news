"use client";
import React from "react";

// export const metadata = {
//   title: "Login | Dragon news",
// };

const LoginPage = () => {

    const formHandelerFunc = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(email, password)

    }

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="px-10 py-15 rounded-lg shadow bg-white">
          <form className="" onSubmit={formHandelerFunc}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your password"
              />
              <p className="label"></p>
            </fieldset>
            <fieldset className="fieldset">
              <button className="btn w-full bg-zinc-700 text-white">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
