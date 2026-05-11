"use client"

import { useState } from "react"
import HeroSection from "../UI/HeroSection"
import PopularNews from "../UI/PopularNews"

export default function HomeContent({ articles } : { articles: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalNews = 5

    const popularNews = articles.slice(5, 8);

    const handleNext = () => {
        if (currentIndex < totalNews - 1) setCurrentIndex(currentIndex + 1)
    }

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
    }

    if (!articles || articles.length === 0) return null

    return <>
        <HeroSection
            headline={articles[currentIndex]}
            currentIndex={currentIndex}
            totalNews={totalNews}
            onNext={handleNext}
            onPrev={handlePrev}
        />
        <PopularNews articles={popularNews} />
    </>
}