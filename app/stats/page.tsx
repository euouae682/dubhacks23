import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../navbar";
import { Notes } from "./components/notes";

export default function Stats() {
  return (
    <main className="flex h-screen">
      <img src="Stats-UI.png" />

      {/* <div className="bg-orange-600 p-5 pt-10">
        <Navbar />
      </div>
      <div className="flex">
        <Notes />
        <div className="grid grid-cols-2 grid-rows-3 w-[820px]">
            <div className="border-solid border-red-500 border-8"></div>
            <div className="border-solid border-red-500 border-8"></div>
            <div className="border-solid border-red-500 border-8"></div>
            <div className="border-solid border-red-500 border-8 row-span-2"></div>
            <div className="border-solid border-red-500 border-8"></div>
        </div>
      </div> */}
    </main>
  );
}
