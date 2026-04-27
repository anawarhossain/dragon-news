"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

// export const metadata = {
//   title: "Login | Dragon news",
// };

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const RegisterFormHandelerFunc = async (data) => {
    // console.log(data, "data");

    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.photoUrl,
      callbackURL: "/",
    });

    // console.log(res, error, "errors");
    if (error) {
      alert(error.message);
    }

    if (res) {
      alert(`${data.name} Create Successfully account`);
    }
  };

  // console.log(watch("email"), "watch");
  // console.log(watch("password"), "watch");

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register your account
        </h2>
        <hr className="border-gray-200" />

        <form
          onSubmit={handleSubmit(RegisterFormHandelerFunc)}
          className="space-y-4"
        >
          <div className="form-control">
            <label className="label font-semibold block">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className={`input input-bordered bg-gray-100 w-full ${errors.name ? "border-red-500" : ""}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label font-semibold">Photo Url</label>
            <input
              type="text"
              placeholder="Enter your photo url"
              className={`input input-bordered bg-gray-100 w-full ${errors.photoUrl ? "border-red-500" : ""}`}
              {...register("photoUrl", { required: "Photo Url is required" })}
            />
            {errors.photoUrl && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.photoUrl.message}
              </span>
            )}
          </div>

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
      </div>
    </div>
  );
};

export default RegisterPage;
