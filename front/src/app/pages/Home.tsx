import EmphasisEventCard from "../components/EmphasisEventCard";
import EventType from "../components/EventType";
import PrincipalEvent from "../components/PrincipalEvent";

export default function Home() {
  return (
    <div className="mt-36 px-32">

      <PrincipalEvent />

      <div className="mt-6 text-primary-blue">
        <h2 className="font-medium text-2xl">Eventos em destaque</h2>
        <span>Se divirta com os principais eventos de Minas Gerais e do Brasil!</span>

        <div className="grid grid-cols-3 mt-2 gap-6 max-w-[1196px]">
          <EmphasisEventCard />
          <EmphasisEventCard />
          <EmphasisEventCard />
        </div>
      </div>

      <div className="mt-6 text-primary-blue">
        <h2 className="font-medium text-2xl">Navegue por tipo de evento</h2>
        <span>Vá ao evento que é a sua cara :D</span>

        <div className="grid grid-cols-7 gap-10 max-w-[1196px] mt-2">
          <EventType />
          <EventType />
          <EventType />
          <EventType />
          <EventType />
          <EventType />
          <EventType />
        </div>
      </div>

    </div>
  )
}