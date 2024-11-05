'use client'

import React from 'react'
import Title from '../components/Title'
import Image from 'next/image';

import { useFetch } from '../customHooks/useFetch';

export default function Movies() {
  const { data, isLoading, error } = useFetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json");

  return (
    <>
      <Title
        title="Popular Movies"
      />

      <div className='h-full px-2 md:px-28 py-6 overflow-scroll'>
        <ul className="flex flex-wrap justify-center md:justify-between gap-3">
          {error && <li>Oops! Something went wrong</li>}

          {isLoading && <li>Loading...</li>}

          {
            data?.filter((object) => object.programType === "movie").map((object, index) =>
              <li key={index} className="flex flex-col">
                <div className="h-48 w-36 hover:border-2 hover:border-white hover:opacity-20">
                  <Image
                    src={`${object.images["Poster Art"].url}`}
                    width={500}
                    height={500}
                    alt="Movie image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-xs w-36 relative group">
                  {object.title}

                  <span className="absolute w-full left-0 -top-40 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {object.title} ({object.releaseYear}) <br />
                    {object.description} <br />
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
