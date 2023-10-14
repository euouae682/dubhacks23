import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <main className="grid grid-cols-10 h-screen">
      <div className="bg-cyan-300">NAV BAR</div>
      <div className="col-span-3">HUMAN DIAGRAM</div>
      <div className="col-span-6 bg-zinc-300">MAIN</div>
    </main>
  );
}
