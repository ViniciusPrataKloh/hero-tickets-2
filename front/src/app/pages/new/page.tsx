"use client";

import HeaderPages from "@/app/components/HeaderPages";
import NewForm from "@/app/components/NewForm";
import { InputFile } from "@/app/components/InputFile";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Checkbox from '@radix-ui/react-checkbox';
import { ChangeEvent } from 'react';
import { LuCheck } from 'react-icons/lu';

const typesEvent = [
  'Acadêmico',
  'Animais',
  'Cultural',
  'Feira',
  'Festival',
  'Gastronomia',
  'Musical',
  'Outros',
];

export interface IEvent {
  id: string;
  title: string;
  location: any;
  date: Date;
  description: string;
  banner: string;
  flyers: string[];
  price: any[];
  coupons: string[];
  participants: string[];
  categories: string[];
  city: string;
  formattedAddress: string;
}

interface IFormProps {
  title: string;
  coupons: string;
  date: string;
  latitude: string;
  longitude: string;

  time: string;
  price: string;
  sector: string;
  description: string;
  categories: string;
  map: File;
  banner: File;
}


export default function New() {
  const [eventData, setEventData] = useState<IEvent>({} as IEvent);
  const [flyers, setFlyers] = useState<File[]>([]);

  const { register, watch, handleSubmit } = useForm<IFormProps>();

  function handleFieldChange(field: any, value: any) {
    console.log({ field, value });
  }

  function handleFileChange(field: any, file: any) {
    if (field === 'flyers') {
      setFlyers([...flyers, file]);
    } else {
      // setValue(field, file);
      console.log({ field, file });
    }
  };

  const title = watch('title');
  console.log(`title: ${title}`);
  const location = watch('location');
  console.log(`location: ${location}`);
  const date = watch('date');
  console.log(`date: ${date}`);
  const time = watch('time');
  console.log(`time: ${time}`);
  const categories = watch('categories');
  console.log(`categories: ${categories}`);
  const price = watch('price');
  console.log(`price: ${price}`);
  const sector = watch('sector');
  console.log(`sector: ${sector}`);
  const coupons = watch('coupons');
  console.log(`coupons: ${coupons}`);
  const description = watch('description');
  console.log(`description: ${description}`);

  return (
    <div className="mx-auto mt-0 max-w-[1600px] flex-1">

      <div className="px-14 mt-28 text-primary-blue">
        <HeaderPages label="Adicionar Eventos" />

        <form >
          <main className="grid grid-cols-2 mt-8">

            {/* LEFT */}
            <section className="border-secondary-blue border-r-2 pr-32">
              <h2 className="text-2xl font-medium">Adicionar Eventos</h2>
              <span className="text-base font-light">Crie o seu próprio evento da maneira que você preferir! :)</span>

              <NewForm
                onChange={() => handleFieldChange}
                registerTitle={{ ...register('title') }}
                registerLocation={{ ...register('location') }}
                registerDate={{ ...register('date') }}
                registerTime={{ ...register('time') }}
                registerCategories={{ ...register('categories') }}
                registerPrice={{ ...register('price') }}
                registerSector={{ ...register('sector') }}
                registerCoupons={{ ...register('coupons') }}
                registerDescription={{ ...register('description') }}
              />
            </section>



            {/* RIGHT */}
            <section className="ml-[76px] w-max-[522px]">
              <h2 className="text-2xl font-medium">Área Criativa</h2>
              <span className="text-base font-light">Adicione as imagens referentes ao seu evento!</span>

              <main className="mt-8">

                <div>
                  <h2 className="text-base font-medium text-primary-blue">Banner</h2>
                  <span className="text-xs font-light text-gray-600">Insira um banner no formato 336x280</span>
                  <div className="mt-1 w-[522px] h-[120px] rounded-3xl bg-gray-300 bg-cover bg-center">
                    {/* <div className="w-full h-full cursor-pointer bg-cover bg-center rounded-3xl"> */}
                    {/* <input type="file" className="block opacity-0 w-full-full cursor-pointer"/> */}
                    <InputFile
                      // {...register('banner')}
                      onChange={(e) => handleFileChange('banner', e)}
                    />
                    {/* </div> */}
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
        </form>

      </div>

    </div>
  )
}