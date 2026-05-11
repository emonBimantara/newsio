"use client"

import Image from "next/image"
import { NAV_CATEGORIES } from "@/const/navigation"
import { usePathname } from "next/navigation"
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-between mt-7 mx-15">
            <div className="logo flex items-center gap-4">
                <Image
                    src="/logo.png"
                    alt="Newsio"
                    width={40}
                    height={40}
                />
                <h1 className="font-bold text-2xl">Newsio</h1>
            </div>

            <div className="category flex gap-5">
                {NAV_CATEGORIES.map((cat) => {
                    const isActive = pathname == cat.slug

                    return (
                        <Link
                            href={cat.slug}
                            className={`
                                text-md font-medium transition-all duration-200 hover:text-blue-600 
                                ${isActive 
                                    ? "text-#0090FF font-bold" 
                                    : "text-gray-500"
                                }`
                            }
                        >
                            {cat.name}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}