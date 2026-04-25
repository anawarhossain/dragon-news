"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, className = "", children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 transition-all duration-300 ${
        isActive
          ? "border-b-2 border-purple-500 text-purple-600 font-semibold"
          : "hover:text-purple-400"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
