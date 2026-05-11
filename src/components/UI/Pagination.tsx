"use client"

import Image from "next/image"
import { useState } from "react"

export default function Pagination() {
    const [currentNews, setCurrentNews] = useState(1)
    const totalNews = 5

    function handlePrev() {
        if (currentNews > 1) {
            setCurrentNews(currentNews - 1)
        }
    }

    function handleNext() {
        if (currentNews < totalNews) {
            setCurrentNews(currentNews + 1)
        }
    }

    return (
        <div className="flex items-center gap-8">

            <button onClick={handlePrev}>
                <Image
                    src="/left-pagination.png"
                    alt="Previous"
                    width={8}
                    height={8}
                />
            </button>

            <p className="text-md">
                {currentNews} dari {totalNews}
            </p>

            <button onClick={handleNext}>
                <Image
                    src="/right-pagination.png"
                    alt="Next"
                    width={8}
                    height={8}
                />
            </button>

        </div>
    )
}