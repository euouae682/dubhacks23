import { useState, useEffect } from 'react';

export function TemporaryAIComponentName() {
  const patient_id = 1
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inp, setInp] = useState(null)
  const [loading, setLoading] = useState(false)
  const invertChatState = () => {
    setChatOpen(!chatOpen)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let inp_cpy = inp
    setInp("")
    setLoading(true)
    fetch(`/api/patients/${patient_id}/chatbot`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([...messages, {"role": "user", "content": inp_cpy}])
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages([...messages, {"role": "user", "content": inp_cpy}, data])
      })

    setLoading(false)
};


  let btn_class = chatOpen ? "hidden " : ""
  let chat_class = chatOpen ? "" : "hidden "
    return (
      <div className="col-span-2 bg-orange-200 p-5 rounded-xl text-orange-900">
        <h3 className="font-bold tracking-wide">Dr. Love is offline</h3>
        <h4 className="tracking-wide text-sm">In meeting until 3pm</h4>
        <p>Ask any of your questions to OncoChat!</p>
        <button onClick={invertChatState} className={btn_class + "bg-orange-900 text-white py-2 px-4 rounded-lg hover:bg-orange-700 font-bold"}>Chat Now!</button>
        <div className={chat_class + "bg-gray-100 p-3"}>
          <button onClick={invertChatState}>x</button>
          <p>OncoBot</p>
          <ul>
            <li>Hi, I'm OncoBot. How can I help you?</li>
            {messages.map(function(message, index){
              return <li key={ index }>{message.content}</li>;
            })}
          </ul>
          <form onSubmit={handleSubmit}>
            <input disabled={loading}
              type="text" value={inp} onChange={(e) => setInp(e.target.value)}
            />
          </form>
        </div>
      </div>
    )
  }
  