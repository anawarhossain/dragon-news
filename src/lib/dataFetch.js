export const CategoryFetch = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories",
      {
        next: { revalidate: 3600 }, // ক্যাশিং সুবিধা পাবে
      },
    );

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    return data.data; // এটি news_category অবজেক্টটি রিটার্ন করবে
  } catch (error) {
    console.error(error);
    return { news_category: [] }; // এরর হলে খালি অ্যারে রিটার্ন করবে
  }
};
export const NewsFetchByCategory = async ({ category_id }) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${category_id}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const DetailsNewsFetchById = async ({ news_id }) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/${news_id}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
