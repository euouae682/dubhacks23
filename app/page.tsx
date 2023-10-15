import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./navbar";
import { Diagram } from "./components/diagram";
import { Main } from "./components/main";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="bg-orange-600 p-10 h-[2000px] pt-10">
        <Navbar />
      </div>
      <div className="grid grid-cols-9 w-full">
        <Diagram />
        <Main />
      </div>
    </main>
  );
}
