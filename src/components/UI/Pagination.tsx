"use client"

import Image from "next/image"

interface PaginationProps {
    current: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
}

export default function Pagination({ current, total, onNext, onPrev }: PaginationProps) {
    return (
        <div className="flex items-center gap-8">
            <button onClick={onPrev} disabled={current === 1} className="disabled:opacity-20">
                <Image src="/left-pagination.png" alt="Prev" width={8} height={8} />
            </button>

            <p className="text-md font-medium">
                {current} dari {total}
            </p>

            <button onClick={onNext} disabled={current === total} className="disabled:opacity-20">
                <Image src="/right-pagination.png" alt="Next" width={8} height={8} />
            </button>
        </div>
    )
}