// How to implement diagram:
// add image map
// iterate for: circle shape, coords,

// for each one, change to cursor and create popup
"use client";

import Image from "next/image";
import { useState } from "react";

export function Diagram() {
  const [healthPoints, setHealthPoints] = useState([
    {
      topPos: "26",
      leftPos: "50",
      status: "caution",
    },
    {
      topPos: "32",
      leftPos: "75",
      status: "alert",
    },
    {
      topPos: "63",
      leftPos: "42",
      status: "caution",
    },
  ]);

  return (
    <div className="col-span-3 bg-orange-200">
      <div className="h-full w-[30%] grid absolute grid-cols-8 grid-rows-12">
          { Array.apply(null, Array(96)).map(function () {}).map(() => {
            return <div className="w-1/8 ml-5 border-solid border-t-4 border-orange-800 border-opacity-25"></div>
          })}
      </div>
      <div className="relative h-full m-auto bg-[url('/humandiagram.png')] bg-no-repeat bg-top bg-[length:100%]">
        <ul className="relative h-full">
          {healthPoints.map(({ topPos, leftPos, status }) => {
            return (
              <li
                className={
                  "absolute block top-[" +
                  topPos +
                  "%] left-[" +
                  leftPos +
                  "%] w-5 h-5 -ml-2.5 -mt-2.5 " +
                  (status === "caution" ? "bg-yellow-500" : "bg-red-600") +
                  " rounded-3xl drop-shadow cursor-pointer"
                }
              ></li>
            );
          })}
          {/* <li className="absolute block top-[26%] left-[50%] w-5 h-5 -ml-2.5 -mt-2.5 bg-yellow-500 rounded-3xl drop-shadow cursor-pointer"></li>
                    <li className="absolute block top-[32%] left-[75%] w-5 h-5 -ml-2.5 -mt-2.5 bg-red-600 rounded-3xl drop-shadow cursor-pointer"></li>
                    <li className="absolute block top-[63%] left-[42%] w-5 h-5 -ml-2.5 -mt-2.5 bg-yellow-500 rounded-3xl drop-shadow cursor-pointer"></li> */}
        </ul>
      </div>
    </div>
  );
}
