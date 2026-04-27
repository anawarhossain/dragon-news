"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const LoginFormHandelerFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    
    // console.log(res, error, "errors");
    if (res) {
      alert(`${res.user.name} Login Successfully `);
    } 
    if (error) {
      alert(error.message)
    }

  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Login your account
        </h2>
        <hr className="border-gray-200" />

        <form
          onSubmit={handleSubmit(LoginFormHandelerFunc)}
          className="space-y-4"
        >
          <div className="form-control">
            <label className="label font-semibold">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`input input-bordered bg-gray-100 w-full ${errors.email ? "border-red-500" : ""}`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`input input-bordered bg-gray-100 w-full ${errors.password ? "border-red-500" : ""}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-zinc-700 hover:bg-zinc-800 text-white border-none w-full"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don &rsquo; t Have An Account?{" "}
          <Link
            href="/register"
            className="text-red-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
