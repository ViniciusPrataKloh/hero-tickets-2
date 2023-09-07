import Image from "next/image";
import { LuSearch } from "react-icons/lu";

import logo from "../../../public/logo-tickets.png";


export default function Header() {
  return (
    <div className="absolute w-full mt-0 top-0">
      <header className="bg-primary-blue top-0 flex items-center justify-center gap-6 py-3 px-14 h-[86px] shadow-black shadow ">

        <Image src={logo} alt="Logo do Hero Tickets" />
        <form className="w-[700px] bg-white px-5 py-1 rounded-lg ml-28">
          <div className="w-full flex items-center justify-between">
            <input
              className="w-full outline-none"
              placeholder="Insira o nome ou endereço do seu evento por aqui! :)"
              id="input"
              name="input"
            />
            <button type="submit">
              <LuSearch />
            </button>
          </div>
        </form>

      </header>
    </div>
  )
}