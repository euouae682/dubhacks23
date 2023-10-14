import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { Diagram } from "./components/diagram";
import { Main } from "./components/main";

export default function Home() {
  return (
    <main className="grid grid-cols-10 h-screen">
      <Navbar />
      <Diagram />
      <Main />
    </main>
  );
}
