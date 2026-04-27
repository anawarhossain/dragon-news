"use client";
import Image from "next/image";
import React from "react";
import ProfileLogo from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Career", href: "/career" },
];

const Navbar = () => {
  const router = useRouter();
  // মেনু রেন্ডার করার জন্য একটি ফাংশন
  const renderNavLinks = () =>
    navItems.map((item) => (
      <li key={item.href}>
        <NavLink href={item.href}>{item.name}</NavLink>
      </li>
    ));

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user?.name, user?.email, user?.image, "session");

  // Logout handle
  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
          },
          onError: (ctx) => {
            alert(ctx.error.message || "Logout failed!");
          },
        },
      });
    } catch (err) {
      console.error("Unexpected error during logout:", err);
    }
  };

  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {renderNavLinks()}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {renderNavLinks()}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {isPending ? (
            <span className="loading loading-spinner text-success"></span>
          ) : user ? (
            <div>
              <div className="avatar flex justify-center items-center gap-3">
                <h1>{user?.name}</h1>
                <div className="w-10 rounded-full border border-gray-200">
                  <Image
                    src={user?.image || ProfileLogo}
                    alt="User Profile"
                    width={40}
                    height={40}
                  />
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-neutral btn-sm md:btn-md rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-neutral btn-sm md:btn-md rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
