export function Chatbot() {
  return (
    <div
      className="col-span-2 bg-orange-200 p-5 rounded-xl text-orange-900 bg-[url(/chatbot.png)]
      bg-[length:8rem] bg-no-repeat bg-right-bottom"
    >
      <div className="flex items-center gap-3 mb-5">
        <img
          src="doctor-temp.jpg"
          className="rounded-lg border-4 border-orange-300 w-16 h-16"
        />
        <div>
          <h3 className="font-bold">Dr. Love is offline.</h3>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-sm">In Meeting Until 3pm</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-8/12 text-center">
        <p>Ask any of your question on OncoChat!</p>
        <a
          href="#"
          className="text-white bg-orange-600 mx-auto px-6 py-3 rounded-xl hover:bg-orange-700 transition"
        >
          Chat Now!
        </a>
      </div>
    </div>
  );
}
