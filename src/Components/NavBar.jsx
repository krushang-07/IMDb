import React from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex justify-center gap-6 text-lg dark:bg-amber-400 bg-amber-300 py-3">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
