import Link from "next/link";
import { LuFilter, LuHelpCircle, LuHome, LuMapPin, LuPlusSquare, LuShieldAlert } from "react-icons/lu";

export default function Sidebar() {
  return (
    <aside className="sidebar fixed z-10 top-[86px] bottom-0 text-xs text-primary-blue h-screen right-0 p-2 w-[90px] overflow-y-auto text-center bg-custom-gray-200 shadow">
      <div className="h-full px-3 py-4 overflow-y-auto">

        <Link href={'/'}>
          <div className="flex flex-col text-center items-center justify-center cursor-pointer mb-9">
            <LuHome size={30} />
            <span>Página Inicial</span>
          </div>
        </Link>

        <Link href={'/'}>
          <div className="flex flex-col text-center items-center justify-center cursor-pointer mb-9">
            <LuMapPin size={30} />
            <span>Mapa</span>
          </div>
        </Link>

        <Link href={'/'}>
          <div className="flex flex-col text-center items-center justify-center cursor-pointer mb-9">
            <LuPlusSquare size={30} />
            <span>Adicionar Evento</span>
          </div>
        </Link>

        <Link href={'/pages/search'}>
          <div className="flex flex-col text-center items-center justify-center cursor-pointer mb-9">
            <LuFilter size={30} />
            <span>Filtrar Eventos</span>
          </div>
        </Link>

        <Link href={'/'}>
          <div className="flex flex-col text-center items-center justify-center cursor-pointer mb-9">
            <LuHelpCircle size={30} />
            <span>SAC</span>
          </div>
        </Link>

        <Link href={'/'}>
          <div className="flex flex-col text-center items-center justify-center cursor-pointer mb-9">
            <LuShieldAlert size={30} />
            <span>Privacidade</span>
          </div>
        </Link>


      </div>
    </aside>
  )
}