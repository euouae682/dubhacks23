import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { Diagram } from "./components/diagram";
import { Main } from "./components/main";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="bg-orange-600 p-5 pt-10">
        <Navbar />
      </div>
      <div className="grid grid-cols-9 w-full">
        <Diagram />
        <Main />
      </div>
    </main>
  );
}
