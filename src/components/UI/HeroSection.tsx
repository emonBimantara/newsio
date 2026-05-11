import Image from "next/image"
import Link from "next/link"
import Pagination from "@/components/UI/Pagination";
import { newsService } from "@/service/news-service";
import { DateFormat } from "@/utils/date-format";

interface HeroProps {
    headline: any;
    currentIndex: number;
    totalNews: number;
    onNext: () => void;
    onPrev: () => void;
}

export default function HeroSection({ headline, currentIndex, totalNews, onNext, onPrev } : HeroProps) {
    if (!headline) return null

    return (
        <section className="flex flex-col mt-20">

            <div className="flex items-center justify-between mx-15">
                <div className="article w-1/3">
                    <article className="flex flex-col gap-5">
                        <p className="text-lg text-gray-600 font-semibold">Headline</p>

                        <h1 className="font-bold text-4xl">{headline.title}</h1>

                        <p className="text-gray-600 text-lg">{headline.contentSnippet} </p>

                        <div className="dateTime flex gap-2">
                            <Image
                                src="/calendar.png"
                                alt="calendar"
                                width={20}
                                height={10}
                            />

                            <p className="text-gray-600">{DateFormat(headline.isoDate)}</p>
                        </div>

                        <Link
                            href={headline.link}
                            target="_blank"
                            className="text-[#0090FF] flex gap-2 font-semibold"
                        >
                            Baca Selengkapnya
                        </Link>
                    </article>
                </div>

                <div className="img">
                    <Image
                        src={headline.image.large}
                        alt="Hero Img"
                        width={700}
                        height={450}
                        className="rounded-xl"
                    />
                </div>
            </div>

            <div className="flex justify-center mt-15">
                <Pagination 
                    current={currentIndex + 1} 
                    total={totalNews} 
                    onNext={onNext} 
                    onPrev={onPrev} 
                />
            </div>
        </section>
    )
}