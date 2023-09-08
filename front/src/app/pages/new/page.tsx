import HeaderPages from "@/app/components/HeaderPages";
import NewForm from "@/app/components/NewForm";

export default function New() {
  return (
    <div className="mx-auto my-0 max-w-[1600px]">

      <div className="px-14 mt-28 text-primary-blue">
        <HeaderPages label="Adicionar Eventos" />

        <main className="grid grid-cols-2 mt-8">

          <section className="border-secondary-blue border-r-2 pr-32">
            <h2 className="text-2xl font-medium">Adicionar Eventos</h2>
            <span className="text-base font-light">Crie o seu próprio evento da maneira que você preferir! :)</span>

            <NewForm />
          </section>

          <section className="ml-[76px] w-max-[522px]">
            <h2 className="text-2xl font-medium">Área Criativa</h2>
            <span className="text-base font-light">Adicione as imagens referentes ao seu evento!</span>

            <main className="mt-8">

              <div>
                <h2 className="text-base font-medium text-primary-blue">Banner</h2>
                <span className="text-xs font-light text-gray-600">Insira um banner no formato 336x280</span>
                <div className="mt-1 w-[522px] h-[120px] rounded-3xl bg-gray-300">
                </div>
              </div>

              <div>
                <h2 className="mt-10 text-base font-medium text-primary-blue">Flyers</h2>
                <span className="text-xs font-light text-gray-600">Insira até três flyers</span>
                <div className="grid grid-cols-3 pr-32 ">
                  <div className="h-[120px] w-[162px] rounded-3xl bg-gray-300">
                  </div>
                  <div className="h-[120px] w-[162px] rounded-3xl bg-gray-300">
                  </div>
                  <div className="h-[120px] w-[162px] rounded-3xl bg-gray-300">
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mt-10 text-base font-medium text-primary-blue">Mapa do Evento</h2>
                <span className="text-xs font-light text-gray-600">Insira o Mapa do Evento indicando os setores</span>
                <div className="mt-1 w-[522px] h-[228px] rounded-3xl bg-gray-300">
                </div>
              </div>

            </main>
          </section>

        </main>
      </div>

    </div>
  )
}