"use client";
// ESM
import { MANGA } from "@consumet/extensions";
import Header from "./components/Header";

const main = async () => {
  try {
    const mangadex = new MANGA.MangaDex();
    const results = await mangadex.search("martial peak");
    // Print the results
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};
export default async function Home() {
  const data = await main()
  console.log(data);
  return (
    <main className="container mx-auto">
      <Header />
    </main>
  );
}
