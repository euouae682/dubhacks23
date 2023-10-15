import Image from "next/image";

export function SignUpForm() {
  return (
    <div className="flex flex-col gap-10 items-start bg-orange-200 px-20 py-10 h-screen">
      <h1 className="text-orange-900 text-7xl font-black">Sign Up</h1>

      <form className="flex flex-col self-stretch gap-5">
        <div className="flex flex-col gap-3">
          <label className="text-orange-700 text-xl font-bold" for="full-name">
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            placeholder="John Smith"
            name="full-name"
            required
            className="text-orange-900 bg-orange-100 px-6 py-3 rounded-xl text-xl focus:outline-none 
            placeholder-orange-800 placeholder-opacity-40"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-orange-700 text-xl font-bold" for="email">
            Email Addresses
          </label>
          <input
            id="email"
            type="text"
            placeholder="123@gmail.com"
            name="email"
            required
            className="text-orange-900 bg-orange-100 px-6 py-3 rounded-xl text-xl focus:outline-none 
            placeholder-orange-800 placeholder-opacity-40"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-orange-700 text-xl font-bold" for="password-1">
            Password
          </label>
          <input
            id="password-1"
            type="text"
            name="password"
            required
            className="text-orange-900 bg-orange-100 px-6 py-3 rounded-xl text-xl focus:outline-none 
            placeholder-orange-800 placeholder-opacity-40"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-orange-700 text-xl font-bold" for="password-2">
            Re-Enter Passord
          </label>
          <input
            id="password-2"
            type="text"
            name="password-2"
            required
            className="text-orange-900 bg-orange-100 px-6 py-3 rounded-xl text-xl focus:outline-none 
            placeholder-orange-800 placeholder-opacity-40"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label
            className="text-orange-700 text-xl font-bold"
            for="hospital-code"
          >
            Enter Hospital Code
          </label>
          <input
            id="hospital-code"
            type="text"
            name="full-name"
            required
            className="text-orange-900 bg-orange-100 px-6 py-3 rounded-xl text-xl focus:outline-none 
            placeholder-orange-800 placeholder-opacity-40"
          />
        </div>
      </form>

      <a
        href="#"
        className="bg-orange-800 rounded-xl px-8 py-4 text-white font-bold text-2xl inline-block
        hover:bg-orange-900 transition"
      >
        Log In
      </a>
    </div>
  );
}
