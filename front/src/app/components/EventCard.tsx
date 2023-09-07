import { LuLocateFixed, LuMapPin } from "react-icons/lu";

export default function EventCard() {

  return (
    <div className="w-[36rem] outline-none mb-6">

      <div className="py-2 px-6 flex flex-col text-gray-100 bg-gray-400 rounded-t-2xl shadow-2 shadow-black">
        <h2 className="text-2xl font-semibold">Do Front ao Back</h2>
        <div className="flex flex-row items-center justify-start gap-8 text-xs font-medium mb-[90px]">
          <span>14/07 - 16/07/2023</span>
          <span>08h</span>
        </div>

        <div className="flex flex-row item-center justify-evenly">
          <div className="flex flex-row items-center gap-1">
            <LuMapPin size={24} />
            <span>UFMG, Belo Horizonte</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <LuLocateFixed size={24} />
            <span>A 1,5km de você</span>
          </div>
        </div>
      </div>

      <div className="bg-custom-gray-200 py-4 px-7 flex flex-col items-center justify-center gap-4 rounded-b-2xl border-2 border-b-primary-blue border-x-primary-blue ">
        <p className="text-xs font-normal text-black">
          Venha conhecer aprender o básico da programação numa oficina realizada pela coordenação do curso de Ciência da Computação da UFMG, uma das faculdades mais renomadas do país!
        </p>
        <button
          className="px-4 py-2 bg-primary-blue text-white text-xs rounded-3xl font-bold transition-colors hover:bg-blue-800"
        >
          Ver Detalhes do Evento
        </button>
      </div>

    </div>
  )
}