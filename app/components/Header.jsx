import React from 'react'

import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="bg-blue-500 h-12 md:h-16 flex items-center justify-between px-2 md:px-28">
                <Link href="/">
                    <span className="text-base md:text-4xl font-medium text-white">DEMO Streaming</span>
                </Link>

                <ul className="flex items-center gap-4 md:gap-8">
                    <li>
                        <a href="#" className="text-sm md:text-base text-white">Log in</a>
                    </li>

                    <li>
                        <button className="bg-black px-3 py-1">
                            <span className="text-xs md:text-base text-white font-medium">Start your free trial</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
