// Search bar
// Notification button
// Profile
// ==== three containers ===
// Appointment Dates (weekly)
// Time Schedule (hourly)
// AI thing
"use client";

import { WeekTable } from "./main_components/weektable";
import { HourTable } from "./main_components/hourtable";
import { Medications } from "./main_components/medications";
import { Chatbot } from "./main_components/chatbot";
import { useState } from "react";
import { AIRecommendations } from "./main_components/airecommendations";

export function Main() {
  const [selectedDate, setSelectedDate] = useState("2000-10-10");
  const [eventToAdd, setEventToAdd] = useState();

  return (
    <main className="flex flex-col gap-5 text-xl col-span-6 bg-orange-400 p-10">
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
        <div className="flex gap-2 items-center text-white">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 10.775V11.1C17.5 13.3402 17.5 14.4603 17.064 15.316C16.6805 16.0686 16.0686 16.6805 15.316 17.064C14.4603 17.5 13.3402 17.5 11.1 17.5H9.31667C7.07646 17.5 5.95635 17.5 5.10071 17.064C4.34806 16.6805 3.73613 16.0686 3.35264 15.316C2.91667 14.4603 2.91667 13.3402 2.91667 11.1V10.775V10.775C2.91667 8.53479 2.91667 7.41468 3.35264 6.55904C3.73613 5.80639 4.34806 5.19447 5.10071 4.81097C5.95635 4.375 7.07646 4.375 9.31666 4.375H11.1C13.3402 4.375 14.4603 4.375 15.316 4.81097C16.0686 5.19447 16.6805 5.80639 17.064 6.55904C17.5 7.41469 17.5 8.53479 17.5 10.775Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.2083 11.6667H12.7C14.3802 11.6667 15.2202 11.6667 15.862 11.9936C16.4265 12.2813 16.8854 12.7402 17.173 13.3047C17.5 13.9464 17.5 14.7865 17.5 16.4667V30.625"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.7917 18.9583H22.3C20.6198 18.9583 19.7798 18.9583 19.138 19.2853C18.5735 19.5729 18.1146 20.0319 17.827 20.5964C17.5 21.2381 17.5 22.0782 17.5 23.7583V32.0833"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 18.0667V18.3917C17.5 20.6319 17.5 21.752 17.936 22.6076C18.3195 23.3603 18.9314 23.9722 19.684 24.3557C20.5397 24.7917 21.6598 24.7917 23.9 24.7917H25.6833C27.9235 24.7917 29.0436 24.7917 29.8993 24.3557C30.6519 23.9722 31.2639 23.3603 31.6474 22.6076C32.0833 21.752 32.0833 20.6319 32.0833 18.3917V18.0667V18.0666C32.0833 15.8264 32.0833 14.7063 31.6474 13.8507C31.2639 13.098 30.6519 12.4861 29.8993 12.1026C29.0436 11.6667 27.9235 11.6667 25.6833 11.6667H23.9C21.6598 11.6667 20.5397 11.6667 19.684 12.1026C18.9314 12.4861 18.3195 13.098 17.936 13.8507C17.5 14.7063 17.5 15.8264 17.5 18.0667Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-3xl font-black">OncoSupport</p>
        </div>
      </header>

      <WeekTable
        selectedDate={selectedDate}
        onClickDay={(e: any) => setSelectedDate(e.target.id)}
      />
      <HourTable selectedDate={selectedDate} />

      <div className="grid grid-cols-5 gap-5 h-96">
        <AIRecommendations />
        <Chatbot />
      </div>
    </main>
  );
}
