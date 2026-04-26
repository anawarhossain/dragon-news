import { redirect } from "next/navigation";

export default async function Home() {
  const defaultCategoryId = "01";

  return redirect(`/category/${defaultCategoryId}`);
}
