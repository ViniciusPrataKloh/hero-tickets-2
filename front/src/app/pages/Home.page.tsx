import FilterForm from "../components/FilterForm";
import EventCard from "../components/EventCard";

export default function Home(){
  return(
    <div className="px-14 mt-28 text-primary-blue">
      <header className="font-normal text-base">
        Home - <strong>Filtrar Eventos</strong>
      </header>

      <main className="grid grid-cols-2 mt-8">

        <section className="border-secondary-blue border-r-2 pr-32">
          <h2 className="text-2xl font-medium">Filtrar Eventos</h2>
          <span className="text-base font-light">Busque o evento que é a sua cara de maneira mais detalhada!</span>

          <FilterForm />
        </section>

        <section className="ml-[76px]">
          <header>
            <h2 className="text-2xl font-medium">Resultados da busca</h2>
            <span className="text-base font-light">Explore os resultados da sua busca por diversão! :)</span>
          </header>
          
          <main className="mt-8">
            
            <div>
              <EventCard />
            </div>
            
          </main>
        </section>

      </main>
    </div>
  )
}