'use client'

import Title from "../components/Title";
import { useFetch } from "../customHooks/useFetch"

import Image from "next/image";

export default function Series() {
  const { data, isLoading, error } = useFetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json");

  return (
    <>
      <Title
        title="Popular Series"
      />

      <div className='h-full px-2 md:px-28 py-6 overflow-scroll'>
        <ul className="flex flex-wrap justify-center md:justify-between gap-x-3 gap-y-5">
          {error && <li>{error}</li>}

          {isLoading && <li>Loading...</li>}

          {
            data?.filter((object) => object.programType === "series").map((object, index) =>
              <li key={index} className="flex flex-col">
                <div className="h-48 w-36 hover:border-2 hover:border-white hover:opacity-20">
                  <Image
                    src={`${object.images["Poster Art"].url}`}
                    width={500}
                    height={500}
                    alt="Series image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-xs w-36 relative group">
                  {object.title}

                  <span className="absolute w-full left-0 -top-40 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {object.title} ({object.releaseYear}) <br/>
                    {object.description} <br/>
                  </span>
                </h3>
              </li>
            )
          }
        </ul>
      </div>
    </>
  )
}
