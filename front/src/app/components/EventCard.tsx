import { LuLocateFixed, LuMapPin } from "react-icons/lu";

import eventCover from "../../../public/event-2.png";

export default function EventCard(){

  return(
    <div className="w-[496px] h-[176px]">
      <div className="py-2 px-6 flex flex-col text-gray-100" style={{ backgroundImage : `url(${eventCover})`}}>
        <h2 className="text-2xl font-semibold">Do Front ao Back</h2>
        <div className="flex flex-row items-center justify-start gap-8 text-xs font-medium mb-[90px]">
          <span>14/07 - 16/07/2023</span>
          <span>08h</span>
        </div>
      </div>

      <div className="flex flex-row item-center justify-evenly">
        <div className="flex flex-row items-center gap-1">
          <LuMapPin size={24}/>
          <span>UFMG, Belo Horizonte</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <LuLocateFixed size={24}/>
          <span>A 1,5km de você</span>
        </div>
      </div>
    </div>
  )
}