"use client"; // Ensure this component runs on the client-side

import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi"; // Make sure to import the icon correctly

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-4 transition-shadow duration-200 max-w-sm mx-auto">
      <Link href={`/movie/${result.id}`}>
        <div className="w-full h-auto">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-1000 ease-in-out"
            alt={result.title}
          />
        </div>
        <div className="p-4">
          <div className="line-clamp-2 text-sm text-gray-700 mb-2">
            {result.overview}
          </div>
          <div className="text-lg font-semibold text-center text-gray-400 mt-4">
            {result.title || result.name}
          </div>
          <p className="flex justify-center text-sm">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />{" "}
            {/* Adjust spacing around the icon */}
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
