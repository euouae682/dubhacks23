// How to implement diagram:
// add image map
// iterate for: circle shape, coords,

// for each one, change to cursor and create popup
"use client";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HealthPoint {
  id: number;
  location: String;
  title: String;
  details: String;
  color: String;
}

export function Diagram() {
  const LOCATIONS = {
    head: ["10", "50"],
    throat: ["20", "50"],
    chest: ["28", "50"],
    stomach: ["40", "50"],
    genitals: ["50", "50"],
    knee: ["63", "40"],
    ankle: ["84", "57"],
    shoulder: ["23", "40"],
    elbow: ["30", "70"],
    hand: ["49", "18"],
  };

  const [healthPoints, setHealthPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(0);
  const patient_id = 1;
  const visit_id = 1;

  useEffect(() => {
    fetch(`/api/patients/${patient_id}/visits/${visit_id}/pain_points`)
      .then((res) => res.json())
      .then((data) => {
        setHealthPoints(data);
      });
  }, []);

  const toggleSelected = (e: any) => {
    e.target.key === selectedPoint
      ? setSelectedPoint(0)
      : setSelectedPoint(e.target.key);
  };

  const debugFetch = () => {
    healthPoints.map((event: HealthPoint) => {
      console.log(JSON.stringify(event));
    });
  };

  return (
    <div className="col-span-3 bg-orange-200 relative">
      <div className="h-full w-[30%] grid grid-cols-8 grid-rows-12 fixed">
        {Array.apply(null, Array(96))
          .map(function () {})
          .map(() => {
            return (
              <div className="w-1/8 ml-5 border-solid border-t-4 border-orange-800 border-opacity-25"></div>
            );
          })}
      </div>
      <div className="fixed w-[32%] h-full m-auto bg-[url('/humandiagram.png')] bg-no-repeat bg-top bg-[length:100%]">
        <ul className="h-full">
          {healthPoints.map(({ id, location, title, details, color }) => {
            return (
              <>
                <li
                  key={id}
                  style={{
                    top: LOCATIONS[location][0] + "%",
                    left: LOCATIONS[location][1] + "%",
                    backgroundColor: color,
                  }}
                  onClick={toggleSelected}
                  className="absolute block w-6 h-6 -ml-2.5 -mt-2.5 rounded-3xl drop-shadow cursor-pointer hover:bg-orange-400 transition border-solid border-4 border-orange-200"
                ></li>

                <div
                  style={{ display: selectedPoint !== 0 ? "block" : "none" }}
                  className="absolute bg-orange-100 rounded-2xl w-1/3 h-1/6 top-10 right-5 text-center drop-shadow-lg"
                >
                  <h2 className="text-red-700">{title}</h2>
                  <p>{details}</p>
                  <p className="text-xs">Last updated</p>
                  <p className="text-xs">11/11/23</p>
                </div>
              </>
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
