import Image from "next/image";
import Link from "next/link";

export function Treatments() {
  return (
    <div className="p-5 bg-orange-100 rounded-xl">
      <h3 className="text-2xl text-orange-900 font-bold mb-5">
        Current Treatments
      </h3>

      <div className="text-white bg-orange-600 rounded-2xl">
        <div className="flex justify-between items-center p-5">
          <div className="flex gap-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 29 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8726 5.4581L24.2569 2.90803C23.0429 0.991935 20.4802 0.467685 18.6113 1.7531L3.40713 12.2102C1.63532 13.4288 1.14406 15.8302 2.29498 17.6468L3.91065 20.1968C5.12465 22.1129 7.68735 22.6372 9.55629 21.3518L24.7604 10.8946C26.5323 9.67602 27.0235 7.27461 25.8726 5.4581Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.121 16.5624V16.5624C13.3095 14.6112 11.3563 11.6534 10.666 8.30148V8.30148"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="justify-self-start">Vancomycin</span>
          </div>

          <span>125mg</span>
        </div>
      </div>
    </div>
  );
}
