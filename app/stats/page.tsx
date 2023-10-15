import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../navbar";
import { Notes } from "./components/notes";
import { Treatments } from "./components/treatments";
import { Profile } from "./components/profile";
import { WhiteBloodCells } from "./components/whitebloodcells";
import { Journal } from "./components/journal";

export default function Stats() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="bg-orange-600 p-10 pt-10">
        <Navbar />
      </div>
      <div className="grid grid-cols-[37fr_26fr_37fr] grid-rows-3 gap-5 p-5 w-full bg-orange-400">
        <div className="row-span-full">
          <Notes />
        </div>
        <Treatments />
        <Profile />
        <WhiteBloodCells />
        <div className="col-start-3 row-start-2 row-span-full">
          <Journal />
        </div>
        <img src="flower-background.png" />

        {/* <Notes />
        <div className="grid grid-cols-2 grid-rows-3 w-[820px]">
          <div className="border-solid border-red-500 border-8"></div>
          <div className="border-solid border-red-500 border-8"></div>
          <div className="border-solid border-red-500 border-8"></div>
          <div className="border-solid border-red-500 border-8 row-span-2"></div>
          <div className="border-solid border-red-500 border-8"></div>
        </div> */}
      </div>
    </main>
  );
}
