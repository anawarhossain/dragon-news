import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ category, activeId }) => {
    // console.log(activeId , "activeid")
  return (
    <Link
      href={`/category/${category.category_id}`}
      className={`block py-3 px-6 w-full bg-gray-100 hover:bg-zinc-400 hover:text-white transition-colors rounded-lg text-center font-medium ${activeId == category.category_id && "bg-zinc-700 text-white"}`}
    >
      {category.category_name}
    </Link>
  );
};

export default LeftSidebar;