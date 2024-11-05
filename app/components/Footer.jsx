import React from 'react'

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-2 md:pt-8 pb-4 md:pb-10 px-2 md:px-28">
            <ul className="flex flex-wrap gap-2 divide-x mb-2 divide-gray-400">
                <li className="text-xs md:text-sm">
                    <Link href="/">Home</Link>
                </li>

                <li className="text-xs md:text-sm pl-2">
                    <Link href="#">Terms and Conditions</Link>
                </li>

                <li className="text-xs md:text-sm pl-2">
                    <Link href="#">Privacy Policy</Link>
                </li>

                <li className="text-xs md:text-sm pl-2">
                    <Link href="#">Collection Statement</Link>
                </li>

                <li className="text-xs md:text-sm pl-2">
                    <Link href="#">Help</Link>
                </li>

                <li className="text-xs md:text-sm pl-2">
                    <Link href="#">Manage Account</Link>
                </li>
            </ul>

            <p className="text-xs md:text-sm font-thin">Copyright &copy; 2024 DEMO Streaming. All Rights Reserved.</p>

            <div className="flex flex-wrap mt-4 md:mt-10 justify-between items-center gap-y-2">
                {/* Redes sociales */}
                <ul className="flex gap-6">
                    <li className="h-8 w-8 cursor-pointer">
                        <Image
                            src="/images/social/facebook-white.svg"
                            alt="Facebook"
                            height={500}
                            width={500}
                            className="h-full w-full object-contain"
                        />
                    </li>

                    <li className="h-8 w-8 cursor-pointer">
                        <Image
                            src="/images/social/twitter-white.svg"
                            alt="Facebook"
                            height={500}
                            width={500}
                            className="h-full w-full object-contain"
                        />
                    </li>

                    <li className="h-8 w-8 cursor-pointer">
                        <Image
                            src="/images/social/instagram-white.svg"
                            alt="Facebook"
                            height={500}
                            width={500}
                            className="h-full w-full object-contain"
                        />
                    </li>
                </ul>

                {/* Download from */}
                <ul className="flex gap-3">
                    <li className="h-12 cursor-pointer">
                        <Image
                            src="/images/store/app-store.svg"
                            alt="Facebook"
                            height={500}
                            width={500}
                            className="h-full w-fit object-contain"
                        />
                    </li>

                    <li className="h-12 cursor-pointer">
                        <Image
                            src="/images/store/play-store.svg"
                            alt="Facebook"
                            height={500}
                            width={500}
                            className="h-full w-fit"
                        />
                    </li>

                    <li className="h-12 cursor-pointer">
                        <Image
                            src="/images/store/windows-store.svg"
                            alt="Facebook"
                            height={500}
                            width={500}
                            className="h-full w-fit"
                        />
                    </li>
                </ul>
            </div>
        </footer>
    )
}
