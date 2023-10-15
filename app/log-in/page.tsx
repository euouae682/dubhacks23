import Image from "next/image";
import Link from "next/link";
import { HomeScreen } from "../sign-up/components/homescreen";
import { LogInForm } from "./components/loginform";

export default function SignIn() {
  return (
    <main className="flex h-screen">
      <div className="w-7/12">
        <HomeScreen />
      </div>
      <div className="w-5/12">
        <LogInForm />
      </div>
    </main>
  );
}
