export function WeekTable() {
  return (
    <div className="bg-orange-200 rounded-xl p-5">
      <header className="flex justify-between mb-5 text-orange-900">
        <h3 className="font-bold tracking-wide">Your Telehealth Schedule</h3>
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
      <div className="grid grid-cols-7 gap-5 text-lg text-center text-white font-bold">
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
  );
}
