import HomeContent from "@/components/Page/HomeContent";
import Navbar from "@/components/UI/Navbar";
import { newsService } from "@/service/news-service";

export default async function Home() {
  const articles = await newsService.getByCategory();
  return (
    <main>
      <Navbar />
      <HomeContent articles={articles} />
    </main>
  );
}
