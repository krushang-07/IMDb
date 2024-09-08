import Image from "next/image";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full bg-black-900 text-white min-h-screen">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <div className="relative group w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-lg transition-transform duration-500 ease-in-out"
            style={{
              objectFit: "cover", // Ensures the image covers the entire container without distortion
              width: "100%", // Makes sure the image takes full width of the container
              height: "100%", // Sets the height to 100% of the container
            }}
            alt={movie.title || movie.name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-lg"></div>
        </div>
        <div className="p-4 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400 animate__animated animate__fadeInUp">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-5 leading-relaxed text-gray-600 animate__animated animate__fadeInUp animate__delay-1s">
            {movie.overview}
          </p>
          <p className="text-lg mb-4 text-gray-500">
            <span className="font-semibold text-yellow-400">
              Date Released:
            </span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="text-lg mb-4 text-gray-500">
            <span className="font-semibold text-yellow-400">Rating:</span>{" "}
            {movie.vote_count}
          </p>
          {/* <button className="mt-4 bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 ease-in-out">
            Watch Trailer
          </button> */}
        </div>
      </div>
    </div>
  );
}
