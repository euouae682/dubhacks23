// Search bar
// Notification button
// Profile
// ==== three containers ===
// Appointment Dates (weekly)
// Time Schedule (hourly)
// AI thing

import { WeekTable } from "./main_components/weektable";
import { HourTable } from "./main_components/hourtable";
import { Medications } from "./main_components/medications";
import { Chatbot } from "./main_components/chatbot";

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
              className="text-orange-900 bg-orange-200 rounded-xl px-6 py-3 focus:outline-none 
              placeholder-orange-800"
              type="text"
              placeholder="Search for..."
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
          <svg
            width="50"
            height="45"
            viewBox="0 0 50 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="50" height="45" rx="10" fill="#CB583C" />
            <circle cx="25" cy="15" r="10" fill="#FFD18C" />
            <path
              d="M20.5 22.5H30.5L36 26.5L37.5 29.5L39 32L40 36L40.5 40L41.5 45H10H7.5L9 40L10 36L11.5 32L12.5 29.5L15 26.5L20.5 22.5Z"
              fill="#FFD18C"
            />
          </svg>

          <div className="text-base text-white">
            <p>Good morning.</p>
            <p>Hello, John Doe.</p>
          </div>
        </div>
      </header>

      <WeekTable />
      <HourTable />

      <div className="grid grid-cols-5 gap-5 h-96">
        <Medications />
        <Chatbot />
      </div>
    </main>
  );
}
