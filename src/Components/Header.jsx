import React from "react";
import Menu from "./Menu";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import ModeSwitch from "./ModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between item-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <Menu title="home" address="/" Icon={AiFillHome} />
        <Menu title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <ModeSwitch />
        <Link href={"/"} className="flex gap-2 item-center">
          <span className="text-2xl text-black font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-2xl py-1  hidden sm:inline">Rating</span>
        </Link>
      </div>
    </div>
  );
}
