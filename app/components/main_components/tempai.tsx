import { useState, useEffect } from 'react';

export function TemporaryAIComponentName() {
  const [chatOpen, setChatOpen] = useState(false)
  const invertChatState = () => {
    setChatOpen(!chatOpen)
  }

  let btn_class = chatOpen ? "hidden " : "";
    return (
      <div className="col-span-2 bg-orange-200 p-5 rounded-xl text-orange-900">
        <h3 className="font-bold tracking-wide">Dr. Love is offline</h3>
        <h4 className="tracking-wide text-sm">In meeting until 3pm</h4>
        <p>Ask any of your questions to OncoChat!</p>
        <button onClick={invertChatState} className={btn_class + "bg-orange-900 text-white py-2 px-4 rounded-lg hover:bg-orange-700 font-bold"}>Chat Now!</button>
      </div>
    )
  }
  