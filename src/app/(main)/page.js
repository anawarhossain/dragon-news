import LeftSidebar from "@/components/homepage/LeftSidebar";
import { CategoryFetch, NewsFetchByCategory } from "@/lib/dataFetch";
import Link from "next/link";

export default async function Home() {
  const data = await CategoryFetch();
  const news_category = data?.news_category || [];
  // console.log(news_category, "data");

  const Categoriesdata = await NewsFetchByCategory();
  // const news_category = Categoriesdata?.news_category || [];
  // console.log(Categoriesdata)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">
      {/* Left side: Categories */}
      <aside className="lg:col-span-3">
        <h1 className="text-xl font-bold mb-4 text-left">All Categories</h1>
        <nav className="flex flex-col gap-2">
          {news_category.map((category) => (
            <LeftSidebar category={category} key={category.category_id} activeId={4}/>
          ))}
        </nav>
      </aside>

      {/* Middle: News */}
      <main className="lg:col-span-6 border rounded-xl p-4">
        <h2 className="font-semibold">Dragon News Home</h2>
        {/* নিউজ কার্ড এখানে আসবে */}
      </main>

      {/* Right side: Login/Socials */}
      <aside className="lg:col-span-3">
        <h2 className="font-semibold mb-4">Login With</h2>
        {/* রাইট সাইড কন্টেন্ট */}
      </aside>
    </div>
  );
}
