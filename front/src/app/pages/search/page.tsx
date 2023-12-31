import HeaderPages from "@/app/components/HeaderPages";
import EventCard from "../../components/EventCard";
import FilterForm from "../../components/FilterForm";

export default function Search() {
  return (
    <div className="mx-auto my-0 max-w-[1600px]">

      <div className="px-14 mt-28 text-primary-blue">
        <HeaderPages label="Filtrar Eventos" />

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

              <div className="flex flex-col">
                <EventCard />
                <EventCard />
              </div>

            </main>
          </section>

        </main>
      </div>

    </div>
  )
}