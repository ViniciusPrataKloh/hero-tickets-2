"use client";

import * as Slider from '@radix-ui/react-slider';

export default function FilterForm(){
  return(
    <form className="flex flex-col gap-8 mt-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-base">Nome</label>
              <input 
                placeholder="Insira o nome do seu evento"
                type="text"
                id="name"
                className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-base">Localização</label>
              <input 
                placeholder="Insira a localização do seu evento"
                type="text"
                id="address"
                className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none"
              />
            </div>

            <div className="flex flex-row  gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-base">Data</label>
                <input 
                  type="date"
                  id="date"
                  className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-base">Horário</label>
                <input 
                  type="time"
                  id="name"
                  className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-base">Tipo de evento</label>
              <input 
                placeholder="Insira o nome do seu evento"
                type=""
                id="type"
                className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-base">Distância</label>
                <Slider.Root className="relative flex items-center select-none touch-none w-full h-5"
                  defaultValue={[20]}
                  min={0} max={40}
                  step={1}
                >
                  <Slider.Track className="relative grow rounded-full bg-gray-300 h-3">
                    <Slider.Range className="absolute bg-secondary-blue rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-5 h-5 bg-white border-primary-blue border rounded-full outline-none"
                    aria-label="Volume"
                  />
                </Slider.Root>

            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-base">Valor</label>
              <Slider.Root className="relative flex items-center select-none touch-none w-full h-5"
                  defaultValue={[20]}
                  min={0} max={10000}
                  step={1}
                >
                  <Slider.Track className="relative grow rounded-full bg-gray-300 h-3">
                    <Slider.Range className="absolute bg-secondary-blue rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-5 h-5 bg-white border-primary-blue border rounded-full"
                    aria-label="Volume"
                  />
              </Slider.Root>
            </div>

            <div className="flex flex-row items-center justify-center gap-3">
              <button
                type="button"
                className="px-16 py-2 rounded-3xl border-2 border-primary-blue text-primary-blue font-bold transition-colors hover:bg-gray-100"
              >
                Limpar
              </button>
              <button
                type="submit"
                className="px-16 py-2 rounded-3xl bg-primary-blue text-white font-bold transition-colors hover:bg-blue-800"
              >
                Filtrar  
              </button>
            </div>

          </form>
  )
}