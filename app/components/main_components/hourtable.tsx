'use client';

import { ScheduleItem } from "./scheduleitem"
import { useState } from "react"

interface HourTableProps {
  selectedDate: String
}

export function HourTable({ selectedDate }: HourTableProps) {
  const [beginTime, setBeginTime] = useState(new Date('2023-10-14T10:00'));

  const debugSelectedDate = () => {
    console.log(selectedDate);
  }

    return (
      <div className="bg-orange-200 rounded-xl p-5">
        <h3 className="font-bold tracking-wide text-orange-900" onClick={debugSelectedDate}>
          Your Schedule
        </h3>
        <div className="m-5 grid grid-cols-12 grid-rows-3 relative">
          { Array.apply(null, Array(48)).map(function () {}).map(() => {
            return <div className="h-12 border-dashed border-l-2 border-orange-800 border-opacity-25"></div>
          })}
          <div className="col-span-2 mt-2 -ml-5 text-sm font text-orange-800">10:00 am</div>
          <div className="col-span-2 mt-2 -ml-5 text-sm font text-orange-800">11:00 am</div>
          <div className="col-span-2 mt-2 -ml-5 text-sm font text-orange-800">12:00 pm</div>
          <div className="col-span-2 mt-2 -ml-5 text-sm font text-orange-800">1:00 pm</div>
          <div className="col-span-2 mt-2 -ml-5 text-sm font text-orange-800">2:00 pm</div>
          <div className="col-span-2 mt-2 -ml-5 text-sm font text-orange-800">3:00 pm</div>
          <ScheduleItem color="bg-orange-700" name="Blood Draw" location="Floor 3, Room 311" begin={new Date('2023-10-14T10:40')} end={new Date('2023-10-14T12:40')} scheduleBegin={beginTime} zAlign={0} />
          <ScheduleItem color="bg-orange-600" name="Web Development Hell" location="MGH 342" begin={new Date('2023-10-14T11:30')} end={new Date('2023-10-14T14:55')} scheduleBegin={beginTime} zAlign={1} />
          <ScheduleItem color="bg-orange-600" name="Salvation" location="freedom" begin={new Date('2023-10-14T14:00')} end={new Date('2023-10-14T15:30')} scheduleBegin={beginTime} zAlign={2} />
        </div>
      </div>
    )
  }
  