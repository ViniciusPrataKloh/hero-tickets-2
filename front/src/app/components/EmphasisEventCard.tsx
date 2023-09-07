import { LuCalendar, LuClock, LuMapPin } from "react-icons/lu";

export default function EmphasisEventCard() {
  return (
    <div className="py-2 px-7 bg-gray-300 rounded-3xl text-white">
      <strong className="text-2xl font-semibold">MPB Sessions</strong>

      <div className="flex flex-row gap-2 items-center mb-[60px]">
        <div className="flex flex-row items-center gap-1">
          <LuCalendar />
          <span>14/07/2023</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <LuClock />
          <span>20h</span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-1">
        <LuMapPin />
        <span>Serraria Souza Pinto, Belo Horizonte</span>
      </div>
    </div>
  )
}