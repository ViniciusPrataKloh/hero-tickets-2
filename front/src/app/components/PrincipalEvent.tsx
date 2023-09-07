import { LuCalendar, LuClock, LuMapPin } from "react-icons/lu";

export default function PrincipalEvent() {
  return (
    <div className="flex flex-col gap-1 items-start justify-end px-10 py-4 text-white bg-gray-300 w-[1196px] h-[280px] rounded-3xl">
      <strong className="text-[40px] font-bold">Jorge e Mateus</strong>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row items-center gap-1">
          <LuCalendar />
          <span>08/07/2023</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <LuMapPin />
          <span>Mineirão - Belo Horizonte</span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <LuClock />
          <span>14h</span>
        </div>
      </div>
    </div>
  )
}