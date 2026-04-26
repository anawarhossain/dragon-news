"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

// export const metadata = {
//   title: "Login | Dragon news",
// };

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const LoginFormHandelerFunc = (data) => {
    console.log(data, "data");
  };

  console.log(errors, "errors");
//   console.log(watch("email"), "watch");
//   console.log(watch("password"), "watch");

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="px-10 py-15 rounded-lg shadow bg-white">
          <form
            className=""
            onSubmit={() => handleSubmit(LoginFormHandelerFunc)}
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                name="email"
                className="input bg-gray-100"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="label text-red-500">{errors.email.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                name="password"
                className="input bg-gray-100"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />

              {errors.password && (
                <p className="label text-red-500">{errors.password.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <button className="btn w-full bg-zinc-700 text-white">
                Login
              </button>
            </fieldset>
          </form>
          <p className="mt-7">
            Dont’t Have An Account ?{" "}
            <Link href={"/register"} className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
