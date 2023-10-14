// Search bar
// Notification button
// Profile
// ==== three containers ===
// Appointment Dates (weekly)
// Time Schedule (hourly)
// AI thing

export function Main() {
  return (
    <main className="flex flex-col gap-10 text-xl col-span-6 bg-orange-400 p-10">
      <header className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="flex items-center bg-orange-200 rounded-xl">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.75 22.5C18.5825 22.5 22.5 18.5825 22.5 13.75C22.5 8.91751 18.5825 5 13.75 5C8.91751 5 5 8.91751 5 13.75C5 18.5825 8.91751 22.5 13.75 22.5ZM13.75 7.75C12.9621 7.75 12.1819 7.90519 11.4539 8.20672C10.7259 8.50825 10.0645 8.95021 9.50736 9.50736C8.95021 10.0645 8.50825 10.7259 8.20672 11.4539C7.90519 12.1819 7.75 12.9621 7.75 13.75C7.75 14.3023 8.19772 14.75 8.75 14.75C9.30228 14.75 9.75 14.3023 9.75 13.75C9.75 13.2247 9.85346 12.7046 10.0545 12.2193C10.2555 11.734 10.5501 11.293 10.9216 10.9216C11.293 10.5501 11.734 10.2555 12.2193 10.0545C12.7046 9.85346 13.2247 9.75 13.75 9.75C14.3023 9.75 14.75 9.30228 14.75 8.75C14.75 8.19772 14.3023 7.75 13.75 7.75Z"
                fill="#8C4922"
              />
              <path
                d="M25 25L22.5 22.5"
                stroke="#8C4922"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <input
              className="text-orange-900 bg-orange-200 rounded-xl px-6 py-3 focus:outline-none"
              type="text"
            />
          </div>

          <a className="flex bg-orange-200 self-stretch rounded-xl hover:bg-orange-300 transition">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center mx-3"
            >
              <path
                d="M8.1281 8.71898C8.48115 5.18853 11.4519 2.5 15 2.5V2.5C18.5481 2.5 21.5189 5.18853 21.8719 8.71898L22.2302 12.3017C22.3012 13.0122 22.3367 13.3674 22.4025 13.7137C22.5582 14.5334 22.8412 15.3236 23.2412 16.0559C23.4101 16.3651 23.6081 16.6622 24.0042 17.2564L25.4271 19.3906C26.3396 20.7593 26.7958 21.4437 26.5132 21.9719C26.2305 22.5 25.408 22.5 23.763 22.5H6.23703C4.59201 22.5 3.7695 22.5 3.48684 21.9719C3.20419 21.4437 3.66044 20.7593 4.57293 19.3906L5.99577 17.2564C6.39186 16.6622 6.58991 16.3651 6.75885 16.0559C7.15882 15.3236 7.44179 14.5334 7.59749 13.7137C7.66326 13.3674 7.69878 13.0122 7.76983 12.3017L8.1281 8.71898Z"
                fill="#8C4922"
              />
              <path
                d="M12.5852 25.7868C12.7276 25.9197 13.0415 26.0371 13.4781 26.1208C13.9147 26.2046 14.4497 26.25 15 26.25C15.5503 26.25 16.0853 26.2046 16.5219 26.1208C16.9585 26.0371 17.2724 25.9197 17.4148 25.7868"
                stroke="#8C4922"
                stroke-width="2"
                stroke-linecap="round"
              />
              <circle cx="24" cy="15" r="4" fill="#E25E3E" />
            </svg>
          </a>
        </div>
        <div className="flex gap-2 items-center text-orange-950">
          <p>John Doe</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </header>

      <div className="bg-orange-200 rounded-xl p-5">
        <header className="flex justify-between mb-5 text-orange-900">
          <h3 className="font-bold tracking-wide">Your TeleHealth Schedule</h3>
          <div className="flex gap-5 items-center">
            <a href="#" className="hover:text-orange-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </a>

            <p>NOV 11-17</p>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </header>
        <div className="grid grid-cols-7 gap-5 text-lg text-center text-white">
          <a
            href="#"
            className="px-0.5 py-1.5 rounded-2xl bg-orange-600 hover:bg-orange-700 transition"
          >
            <p>MON</p>
            <p>11</p>
            <p>&#9679;</p>
          </a>
          <a
            href="#"
            className="px-0.5 py-1.5 rounded-2xl bg-orange-600 hover:bg-orange-700 transition"
          >
            <p>TUE</p>
            <p>12</p>
            <p></p>
          </a>
          <a
            href="#"
            className="px-0.5 py-1.5 rounded-2xl bg-orange-600 hover:bg-orange-700 transition"
          >
            <p>WED</p>
            <p>13</p>
            <p></p>
          </a>
          <a
            href="#"
            className="px-0.5 py-1.5 rounded-2xl bg-orange-600 hover:bg-orange-700 transition"
          >
            <p>THU</p>
            <p>14</p>
            <p></p>
          </a>
          <a
            href="#"
            className="px-0.5 py-1.5 rounded-2xl bg-orange-600 hover:bg-orange-700 transition"
          >
            <p>FRI</p>
            <p>15</p>
            <p></p>
          </a>
          <a
            href="#"
            className="px-0.5 py-1.5 rounded-2xl bg-orange-600 hover:bg-orange-700 transition"
          >
            <p>SAT</p>
            <p>16</p>
            <p></p>
          </a>
          <a
            href="#"
            className="px-0.5 py-1.5 rounded-2xl bg-orange-600 hover:bg-orange-700 transition"
          >
            <p>SUN</p>
            <p>17</p>
            <p></p>
          </a>
        </div>
      </div>

      <div className="bg-orange-200 rounded-xl p-5">
        <h3 className="font-bold tracking-wide text-orange-900">
          Your Daily Schedule
        </h3>
      </div>

      <div className="grid grid-cols-5 gap-5 h-64">
        <div className="col-span-3 bg-orange-200 p-5 rounded-xl text-orange-900">
          <h3 className="font-bold tracking-wide">Medication</h3>
          <div>
            <div>
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3282 5.16661L21.2342 2.9921C19.6608 1.35819 17.0451 1.35819 15.4717 2.9921L2.6718 16.2843C1.18018 17.8333 1.18018 20.2844 2.67181 21.8334L4.76578 24.0079C6.33917 25.6418 8.95495 25.6418 10.5283 24.0079L23.3282 10.7157C24.8198 9.16675 24.8198 6.7156 23.3282 5.16661Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 18V18C12.8545 16.6519 10.3481 14.1455 9 11V11"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-orange-200 p-5 rounded-xl text-orange-900">
          <h3 className="font-bold tracking-wide">Chatbot</h3>
        </div>
      </div>
    </main>
  );
}
