import Image from "next/image"
import Link from "next/link"
import { DateFormat } from "@/utils/date-format"

export default function PopularNewsCard({ news, rank }: { news: any, rank: number }) {
    return (
        <Link href={news.link} target="_blank" className="my-10 flex gap-5 group cursor-pointer">
            <div className="relative shrink-0">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold z-10 shadow-lg">
                    {rank}
                </div>

                <div className="relative w-[180px] h-[120px]">
                    <Image
                        src={news.image.small}
                        alt={news.title}
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>

            <article className="flex flex-col justify-between flex-1">
                <h3 className="font-bold text-lg leading-tight group-hover:text-[#0090FF] transition-colors line-clamp-3">
                    {news.title}
                </h3>

                <div className="flex gap-3 text-sm items-center">
                    <p className="text-[#0090FF] font-semibold">News</p>
                    <p className="text-gray-400">•</p>
                    <p className="text-gray-600">{DateFormat(news.isoDate)}</p>
                </div>
            </article>
        </Link>
    )
}