import PopularNewsCard from "./PopularNewsCard";

export default function PopularNews (){
    return (
        <section className="mt-15 mx-15">
            <div className="header flex gap-2">
                <div className="w-1 bg-[#0090FF] rounded-lg"></div>
                <h1 className="font-semibold text-2xl">Berita Terpopuler</h1>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <PopularNewsCard rank={1}/>
                <PopularNewsCard rank={2}/>
                <PopularNewsCard rank={3}/>
            </div>
        </section>
    )
}