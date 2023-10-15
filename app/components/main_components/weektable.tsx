'use client';

import { useState, useEffect } from "react";

interface WeekTableProps {
  selectedDate: String
}

export function WeekTable({ selectedDate }: WeekTableProps) {
  const DAYS: String[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const [curDateTime, setCurDateTime] = useState(new Date());
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const initializeDateRange = () => {
    const firstDate: Date = new Date(curDateTime.getFullYear(), curDateTime.getMonth(), curDateTime.getDate() - curDateTime.getDay());
    const lastDate: Date = new Date(curDateTime.getFullYear(), curDateTime.getMonth(), firstDate.getDate() + 6);
    setDateRange([firstDate, lastDate]);
  }

  const addWeek = () => {
    dateRange[0].setDate(dateRange[0].getDate() + 7);
    dateRange[1].setDate(dateRange[1].getDate() + 7);
    setDateRange([dateRange[0], dateRange[1]]);
  }

  const removeWeek = () => {
    dateRange[0].setDate(dateRange[0].getDate() - 7);
    dateRange[1].setDate(dateRange[1].getDate() - 7);
    setDateRange([dateRange[0], dateRange[1]]);
  }

  useEffect(() => {
    initializeDateRange();
  }, [curDateTime])
  
    return (
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
                onClick={removeWeek}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </a>

            <p>{dateRange[0].toDateString().slice(4, 10)} -  
            {' ' + dateRange[1].toDateString().slice(4, 10)}</p>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={addWeek}
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
          {[dateRange[0], 
          new Date(dateRange[0].getFullYear(), dateRange[0].getMonth(), dateRange[0].getDate() + 1),
          new Date(dateRange[0].getFullYear(), dateRange[0].getMonth(), dateRange[0].getDate() + 2), 
          new Date(dateRange[0].getFullYear(), dateRange[0].getMonth(), dateRange[0].getDate() + 3),
          new Date(dateRange[0].getFullYear(), dateRange[0].getMonth(), dateRange[1].getDate() - 2), 
          new Date(dateRange[0].getFullYear(), dateRange[0].getMonth(), dateRange[1].getDate() - 1),
          dateRange[1]].map((date) => {
            return <a
            id={`${date.getFullYear()}-${date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`}
              href="#"
              className="px-0.5 py-1.5 rounded-2xl bg-orange-600 hover:bg-orange-700 transition box-border border-4 border-transparent  focus:border-orange-800"
            >
              { DAYS[date.getDay()] } <br />
              { date.getDate() } <br />
              { date.toDateString() === new Date().toDateString() ? '\u25CF' : '' }
          </a>
          })}
        </div>
      </div>
    )
  }
  