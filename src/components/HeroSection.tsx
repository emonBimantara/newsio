import Image from "next/image"

export default function HeroSection() {
    return (
        <section>
            <div className="article">
                <article>
                    <p>Headline</p>

                    <h1 className="font-bold text-xl">
                        Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi
                    </h1>

                    <p>
                        Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
                    </p>

                    <div className="dateTime flex">
                        <Image
                            src="/calendar.png"
                            alt="Newsio"
                            width={10}
                            height={10}
                        />

                        <p>22 Januari 2024</p>
                    </div>
                </article>
            </div>

            <div className="img">

            </div>
        </section>
    )
}