import Image from "next/image";
import Link from "next/link";
import { HomeScreen } from "./components/homescreen";
import { SignUpForm } from "./components/signinform";

export default function SignIn() {
  return (
    <main className="flex h-screen">
      <div className="w-7/12">
        <HomeScreen />
      </div>
      <div className="w-5/12">
        <SignUpForm />
      </div>
    </main>
  );
}
