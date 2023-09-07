import { LuLocateFixed, LuMapPin } from "react-icons/lu";

export default function EventCard(){
  return(
    <div>
      <div>
        <h2>Do Front ao Back</h2>
        <span>14/07 - 16/07/2023</span>
        <span>08h</span>
        </div>

      <div>
        <div>
          <LuMapPin />
          <span>UFMG, Belo Horizonte</span>
        </div>
        <div>
          <LuLocateFixed />
          <span>A 1,5km de você</span>
        </div>
      </div>
    </div>
  )
}