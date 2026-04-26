"use client";
import React from "react";
import { useForm } from "react-hook-form";

// export const metadata = {
//   title: "Login | Dragon news",
// };

const RegisterPage = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const RegisterFormHandelerFunc = (data) => {
    
    
    console.log(data, "data");
  };

    console.log(errors, "errors");
  // console.log(watch("email"), "watch");
  // console.log(watch("password"), "watch");

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="px-10 py-15 rounded-lg shadow bg-white">
          <form
            className=""
            onSubmit={() => handleSubmit(RegisterFormHandelerFunc)}
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                name="name"
                className="input bg-gray-100"
                placeholder="Enter your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="label text-red-500">{errors.name.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                type="text"
                name="photo"
                className="input bg-gray-100"
                placeholder="Enter your email"
                {...register("photo", { required: "Photo url is required" })}
              />
              {errors.photo && (
                <p className="label text-red-500">{errors.photo.message}</p>
              )}
            </fieldset>
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
              <label className="label py-3">
                <input type="checkbox" defaultChecked className="checkbox" />
                Remember me
              </label>
            </fieldset>
            <fieldset className="fieldset">
              <button className="btn w-full bg-zinc-700 text-white">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
