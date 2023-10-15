"use client";

import { useState } from "react";
import { Note } from "./note";

export function Notes() {
  const [noteList, setNoteList] = useState([]);

  return (
    <div className="p-5 bg-orange-200 rounded-xl">
      <h3 className="text-2xl text-orange-900 font-bold">Notes</h3>

      <Note
        author="Dr. Love"
        date="11/10/23"
        subtitle="Adjusting Medication"
        description="grrrr jappan 🇯🇵 is best country in teh world (sekai) !!!!🤬😡!!!👹🤬!!!!! 
        west bAd grrrgghhhg japenis culture⛩🎎🎏 better than amrican🗽🍔👎!!! (>~<) vendor machine 
        eveywhere 🗼and sakura trees are so 🌸 a e s t h e t i c 🌸 UwU if u hate it then your NOT 
        a man of culture so shinē!!! ~hmph baka -_- 🏮"
      />
      <Note
        author="Luna"
        date="11/9/23"
        subtitle="Pain in Leg+ Side Effects?"
        description="😂G̭̺̙͔̦̖̭E̞̫͙T͕͇😂̩̩̭̗O̝̗̯̖͍͙̬͎U̲͎͕̳͓̱̖̯T̤😂̞̮͓̙O͍͉̥̻̣̺̩̗F͔̜̻͙̥̱ͅ😂̦͖͚͚̺͚M͙Y̘😂͉̝̘̖̮̜H̱̬̲̯E̘̗̥̹͚͕ͅA̠̰̳͇̻̖͇̬D̩͍̩͔̭͓😂͖̹G̻̞̺̬͓̫͙͔E̻̫̙̞T̹̙̹😂̞͙͔̣̪̩O͙̪̹͙͈̪͖̘U͍͚̱͖T̫̫̝̰̝😂̫̤̥̱̖̳̜O͎̼͔͖̥̩F͇̫̳͔̝😂̬͉M͎̙̤̦̰̱͙Y̫̭̜͚̦͈̰😂͈̖̰͎͉H̳̳̬͔͙̲ͅͅE̻͇̹̬̰̜̖̱A͈̜D̜̣͕̫̯̻̝̭😂̰G̠̲͔̻͔̙̯E̯͚̙̘T̙̜͍̳̩̣͕̭😂̠̪̪͎̱O̹̰̺͙̘̪̭̞̱U̻̮͔͈̠ͅT̫͍͖̪̞͚😂͎̖̥͇O͕̩̯̠̹̜͖F̗͉͚͈̤😂̘̠͈̲̦͉̠M̝͈̰̥̹̗̯ͅY̻͕̳͔̠̟̼̙̣😂̜̗̩̼͓͖H̪͍̞͓̟̠̼̻E̥̰͕̳̣͉̪̭A͔D̗̮
        😂͔̜̜͙̤̹̩G̗̤͙̩̤̳E̜̗̥̼̲̺T̫͇̞̺̞😂̭̩̦̹̹̭O̭̯͉̫͎̻̮U̮͇͇͔̗T̞̭̦̼̗̹😂̜̪͖͍O̰͓͎̘̜̙͕F̞̝̖😂̩̟͖̭͍̦M̺̖̙̺Y͙̫̤̺̠̰😂̞̫̩H̖̤͍̣͔̟ͅE̞̹̞̗̭̳Ḁ̗͚͔͖D͓͇̱͍̖͙ͅ😂͈̳G̟̫̣͎̞͖͔͇Ẹ̘̦̭ͅT̩̻͎̹͓̭😂̺̦̞͔̫̟O̫U̪̪̩T͉̻̰͎̙̹̣̯😂͍̲̰̟O̞̬͚̻̞̹̪̳ͅF͚͓̤͓͕̱͖😂̦̟̣̖͇̦͕̞M͍̬͚̠̪̙Y̖̮̟̜̗̻̺😂̪H̬̝̬̼̫̺̗̦E͈̱A͈̗̜͚̭̱͇̙ͅD̳̻"
      />
      <Note
        author="Dr. Love"
        date="11/7/23"
        subtitle="Treatment Going Well"
        description="NO HABLAS ESPANOL!!!!"
      />
    </div>
  );
}
