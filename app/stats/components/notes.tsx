"use client";

import { useState } from "react";
import { Note } from "./note";

export function Notes() {
  const [noteList, setNoteList] = useState([]);

  return (
    <div className="p-5 bg-orange-200 rounded-xl h-full">
      <h3 className="text-2xl text-orange-900 font-bold">Notes</h3>

      <div className="my-3 p-5 rounded-xl bg-orange-100">
        <div className="flex gap-5 items-center mb-3 relative">
          <img
            src="/doctor-love.svg"
            alt="bison"
            width="80"
            height="80"
            className="rounded-xl"
          />
          <div className="font-bold text-orange-900">
            <h1 className="text-2xl">Dr. Love's Notes</h1>
            <h2>11/10/2023</h2>
            <h2>Adjusting Medication</h2>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 absolute top-0.5 right-0.5 stroke-orange-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <p className="text-orange-900">
          Based on your recent test results and how you've been feeling, I
          recommend adjusting your medication to better manage your condition
          and improve your overall health. We'll discuss the specifics during
          your upcoming appointment to ensure the best treatment plan for you.
        </p>
      </div>

      <div className="my-3 p-5 rounded-xl bg-orange-100">
        <div className="flex gap-5 items-center mb-3 relative">
          <img
            src="/luna-silver.svg"
            alt="bison"
            width="80"
            height="80"
            className="rounded-xl"
          />
          <div className="font-bold text-orange-900">
            <h1 className="text-2xl">Luna Silver</h1>
            <h2>11/08/2023</h2>
            <h2>Pain in Leg + Side Effects?</h2>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 absolute top-0.5 right-0.5 stroke-orange-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <p className="text-orange-900">
          Hello Dr Love, I had persistent pain in my leg for the past week, and
          I'm worried about the potential causes and long-term side effects. Can
          you please assess the pain and discuss any associated side effects or
          concerns with us
        </p>
      </div>

      <div className="my-3 p-5 rounded-xl bg-orange-100">
        <div className="flex gap-5 items-center mb-3 relative">
          <img
            src="/doctor-love.svg"
            alt="bison"
            width="80"
            height="80"
            className="rounded-xl"
          />
          <div className="font-bold text-orange-900">
            <h1 className="text-2xl">Dr. Love</h1>
            <h2>11/04/2023</h2>
            <h2>Treatment Going Well</h2>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 absolute top-0.5 right-0.5 stroke-orange-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <p className="text-orange-900">
          I'm pleased to inform you that your treatment is progressing
          exceptionally well, and we are observing positive signs of improvement
          in your condition. Your dedication to the prescribed regimen and your
          commitment to a healthy lifestyle are clearly paying off.
        </p>
      </div>

      {/* <Note
        author="Dr. Love"
        img="/doctor-love.sng"
        date="11/10/23"
        subtitle="Adjusting Medication"
        description="Based on your recent test results and how you've been feeling, 
        I recommend adjusting your medication to better manage your condition and 
        improve your overall health. We'll discuss the specifics during your upcoming 
        appointment to ensure the best treatment plan for you."
      />
      <Note
        author="Luna"
        img="/luna-silver.sng"
        date="11/9/23"
        subtitle="Pain in Leg+ Side Effects?"
        description="😂G̭̺̙͔̦̖̭E̞̫͙T͕͇😂̩̩̭̗O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤😂̞̮͓̙O͍͉̥̻̣̺̩̗F͔̜̻͙̥̱ͅ😂̦͖͚͚̺͚M͙Y̘😂͉̝̘̖̮̜H̱̬̲̯E̘̗̥̹͚͕ͅA̠̰̳͇̻̖͇̬D̩͍̩͔̭͓😂͖̹G̻̞̺̬͓̫͙͔E̻̫̙̞T̹̙̹😂̞͙͔̣̪̩O͙̪̹͙͈̪͖̘U͍͚̱͖T̫̫̝̰̝😂̫̤̥̱̖̳̜O͎̼͔͖̥̩F͇̫̳͔̝😂̬͉M͎̙̤̦̰̱͙Y̫̭̜͚̦͈̰😂͈̖̰͎͉H̳̳̬͔͙̲ͅͅE̻͇̹̬̰̜̖̱A͈̜D̜̣͕̫̯̻̝̭😂̰G̠̲͔̻͔̙̯E̯͚̙̘T̙̜͍̳̩̣͕̭😂̠̪̪͎̱O̹̰̺͙̘̪̭̞̱U̻̮͔͈̠ͅT̫͍͖̪̞͚😂͎̖̥͇O͕̩̯̠̹̜͖F̗͉͚͈̤😂̘̠͈̲̦͉̠M̝͈̰̥̹̗̯ͅY̻͕̳͔̠̟̼̙̣😂̜̗̩̼͓͖H̪͍̞͓̟̠̼̻E̥̰͕̳̣͉̪̭A͔D̗̮
        😂͔̜̜͙̤̹̩G̗̤͙̩̤̳E̜̗̥̼̲̺T̫͇̞̺̞😂̭̩̦̹̹̭O̭̯͉̫͎̻̮U̮͇͇͔̗T̞̭̦̼̗̹😂̜̪͖͍O̰͓͎̘̜̙͕F̞̝̖😂̩̟͖̭͍̦M̺̖̙̺Y͙̫̤̺̠̰😂̞̫̩H̖̤͍̣͔̟ͅE̞̹̞̗̭̳Ḁ̗͚͔͖D͓͇̱͍̖͙ͅ😂͈̳G̟̫̣͎̞͖͔͇Ẹ̘̦̭ͅT̩̻͎̹͓̭😂̺̦̞͔̫̟O̫U̪̪̩T͉̻̰͎̙̹̣̯😂͍̲̰̟O̞̬͚̻̞̹̪̳ͅF͚͓̤͓͕̱͖😂̦̟̣̖͇̦͕̞M͍̬͚̠̪̙Y̖̮̟̜̗̻̺😂̪H̬̝̬̼̫̺̗̦E͈̱A͈̗̜͚̭̱͇̙ͅD̳̻"
      />
      <Note
        author="Dr. Love"
        img="/doctor-love.sng"
        date="11/7/23"
        subtitle="Treatment Going Well"
        description="NO HABLAS ESPANOL!!!!"
      /> */}
    </div>
  );
}
