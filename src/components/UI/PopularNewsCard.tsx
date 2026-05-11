import Image from "next/image"

export default function PopularNewsCard({ rank }) {
    return (
        <section className="my-10 flex gap-5">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold ">
                    {rank}
                </div>

                <Image
                    src="/popularImg.png"
                    alt="Popular News"
                    width={180}
                    height={180}
                    className="rounded-xl"
                />
            </div>

            <article className="flex flex-col justify-between w-[50%]">
                <h3 className="font-bold text-lg leading-tight">
                    Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?
                </h3>

                <div className="flex gap-3 text-sm">
                    <p className="text-[#0090FF] font-semibold">Politik</p>
                    <p className="text-gray-400">•</p>
                    <p className="text-gray-600">22 Jan 2024</p>
                </div>
            </article>
        </section>
    )
}