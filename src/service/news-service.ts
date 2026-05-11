const BASE_URL = "https://berita-indo-api-next.vercel.app/api/cnn-news";

export const newsService = {
    getByCategory: async (category?: string) => {
        try {
            const endpoint = category ? `/${category}` : "";

            const resp = await fetch(`${BASE_URL}${endpoint}`, {
                next: { revalidate: 300 }
            });

            if (!resp.ok) throw new Error("Failed to fetch")

            const respData = await resp.json()
            return respData.data;
        } catch (error) {
            console.error("News Service Error:", error);
            return [];
        }
    }
}