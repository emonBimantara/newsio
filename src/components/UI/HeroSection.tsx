import Image from "next/image"
import Link from "next/link"
import Pagination from "@/components/UI/Pagination";

export default function HeroSection() {
    return (
        <section className="flex flex-col mt-20">

            <div className="flex items-center justify-between mx-15">
                <div className="article w-1/3">
                    <article className="flex flex-col gap-5">
                        <p className="text-lg text-gray-600 font-semibold">Headline</p>

                        <h1 className="font-bold text-4xl">
                            Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi
                        </h1>

                        <p className="text-gray-600 text-lg">
                            Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
                        </p>

                        <div className="dateTime flex gap-2">
                            <Image
                                src="/calendar.png"
                                alt="calendar"
                                width={20}
                                height={10}
                            />

                            <p className="text-gray-600">22 Januari 2024</p>
                        </div>

                        <Link
                            href="/news/1"
                            className="text-[#0090FF] flex gap-2 font-semibold"
                        >
                            Baca Selengkapnya
                        </Link>
                    </article>
                </div>

                <div className="img">
                    <Image
                        src="/heroImg.png"
                        alt="Hero Img"
                        width={700}
                        height={10}
                        className="rounded-xl"
                    />
                </div>
            </div>

            <div className="flex justify-center mt-15">
                <Pagination />
            </div>
        </section>
    )
}