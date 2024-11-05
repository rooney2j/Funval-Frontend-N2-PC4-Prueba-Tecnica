import React from "react";

import Image from "next/image";
import Title from "./components/Title";
import Link from "next/link";

export default function Home() {


  return (
    <>
      <main className="h-full">
        <Title
          title="Popular Titles"
        />

        {/* Cards container */}
        <ul className="px-2 md:px-28 pt-4 md:pt-8 flex gap-4">
          {/* Card 1 - Series */}
          <li>
            <Link href="/series">
              <div className="h-48 w-32 relative cursor-pointer">
                <Image
                  src="/images/placeholder.png"
                  height={500}
                  width={500}
                  alt="icono de series"
                  className="h-full w-full object-cover bg-opacity-30"
                />

                <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="uppercase text-white text-3xl font-bold">Series</span>
                </h3>

                <div className="h-full w-full bg-black -z-10 absolute top-0 left-0 opacity-80"></div>
              </div>
            </Link>

            <h3>
              <span className="text-sm">Popular series</span>
            </h3>
          </li>

          {/* Card 2 - Movies */}
          <li>
            <Link href="/movies">
              <div className="h-48 w-32 relative cursor-pointer">
                <Image
                  src="/images/placeholder.png"
                  height={500}
                  width={500}
                  alt="icono de series"
                  className="h-full w-full object-cover bg-opacity-30"
                />

                <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="uppercase text-white text-3xl font-bold">Movies</span>
                </h3>

                <div className="h-full w-full bg-black -z-10 absolute top-0 left-0 opacity-80"></div>
              </div>
            </Link>

            <h3>
              <span className="text-sm">Popular movies</span>
            </h3>
          </li>
        </ul>
      </main>
    </>
  );
}
