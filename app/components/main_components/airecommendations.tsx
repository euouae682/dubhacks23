export function AIRecommendations() {
  return (
    <div className="col-span-3 flex flex-col justify-between bg-orange-200 p-5 rounded-xl">
      <h3 className="text-orange-900 font-bold tracking-wide mb-5">
        AI Health Recommendations
      </h3>

      <div className="flex items-center gap-5 mb-5">
        <img src="chatbot.png" className="w-3/12 h-auto" />
        <div className="grow flex flex-col gap-3">
          <h4 className="text-orange-900 font-bold text-3xl">
            Walking for 30 minutes.
          </h4>
          <p className="text-orange-800 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            cumque fuga quod id dolor odio exercitationem cum? Numquam ducimus.
          </p>
          <p className="text-orange-800 font-bold">
            Add time to your calendar?
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="bg-orange-600 px-8 py-3 rounded-lg font-bold text-white block"
            >
              YES
            </a>
            <a
              href="#"
              className="bg-white px-8 py-3 rounded-lg font-bold text-orange-600 block"
            >
              NO
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-center">
        <div className="w-6 h-6 bg-orange-800 rounded-full"></div>
        <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
        <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
        <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
      </div>
    </div>
  );
}
