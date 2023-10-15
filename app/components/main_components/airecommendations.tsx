'use client';

import { useState, useEffect } from "react";

interface Recommendation {
  index: number
  title: String,
  description: String,
}

export function AIRecommendations() {
  const patient_id = 1;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recList, setRecList] = useState([
    {
      index: 0,
      title: 'Walking for 30 minutes.',
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cumque fuga quod id dolor odio exercitationem cum? Numquam ducimus.',
    },
    {
      index: 1,
      title: 'Meditating for 15 minutes.',
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cumque fuga quod id dolor odio exercitationem cum? Numquam ducimus.',
    },
    {
      index: 2,
      title: 'Hiking for 45 minutes.',
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cumque fuga quod id dolor odio exercitationem cum? Numquam ducimus.',
    },
    {
      index: 3,
      title: 'Walking for an hour.',
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cumque fuga quod id dolor odio exercitationem cum? Numquam ducimus.',
    },
  ])
  useEffect(() => {
    fetch(`/api/patients/${patient_id}/recommendations/openai`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({'date': '2023-10-15'}),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecList(data.map( (rec, i) => { return {'index': i, 'title': rec.title, 'details': rec.details}}))
      }).then(() => {console.log(recList)})
  }, [])

  const updateFocus = (e: any) => {
    setSelectedIndex(parseInt(e.target.id));
  }

  const debugFocus = () => {
    console.log(selectedIndex)
  }

  return (
    <div className="col-span-3 flex flex-col justify-between bg-orange-200 p-5 rounded-3xl">
      <h3 className="text-orange-900 font-bold tracking-wide mb-5">
        AI Health Recommendations
      </h3>

      <div className="flex items-center gap-5 mb-5">
        <img src="chatbot.png" className="w-3/12 h-auto" />
        <div className="grow flex flex-col gap-3">
          <h4 className="text-orange-900 font-bold text-3xl">
            { recList[selectedIndex].title }
          </h4>
          <p className="text-orange-800 text-base">
            { recList[selectedIndex].details }
          </p>
          <p className="text-orange-800 font-bold" onClick={debugFocus}>
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
        { recList.map((rec) => {
          return <div key={rec.index} id={rec.index.toString()} onClick={updateFocus} 
          style={{backgroundColor: selectedIndex === rec.index ? 'rgb(154 52 18)' : 'rgb(234 88 12)'}}
          className="cursor-pointer w-6 h-6 bg-orange-600 hover:bg-orange-700 rounded-full"></div>
        }) }
      </div>
    </div>
  );
}
