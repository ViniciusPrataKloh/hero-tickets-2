"use client";

import * as Checkbox from '@radix-ui/react-checkbox';
import { UseFormRegister, FieldValues } from 'react-hook-form';
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


interface IInputFieldsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  registerTitle: UseFormRegister<FieldValues> | any;
  registerLocation: UseFormRegister<FieldValues> | any;
  registerDate: UseFormRegister<FieldValues> | any;
  registerTime: UseFormRegister<FieldValues> | any;
  registerCategories: UseFormRegister<FieldValues> | any;
  registerPrice: UseFormRegister<FieldValues> | any;
  registerSector: UseFormRegister<FieldValues> | any;
  registerCoupons: UseFormRegister<FieldValues> | any;
  registerDescription: UseFormRegister<FieldValues> | any;
  categories: string[];
  handleSetCategories: (categories: string[]) => void
}

export default function NewForm({
  registerTitle,
  registerLocation,
  registerDate,
  registerTime,
  registerPrice,
  registerSector,
  registerCoupons,
  registerDescription,
  categories,
  handleSetCategories
}: IInputFieldsProps) {

  function handleToggleCategory(type: string) {
    if (categories.includes(type)) {
      const newCategories = categories.filter((category) => category !== type);
      handleSetCategories(newCategories);
    } else {
      handleSetCategories([...categories, type]);
    }

  }

  return (
    <form className="flex flex-col gap-8 mt-6">
      <div className="flex flex-col gap-2">
        <label className="font-medium text-base">Título</label>
        <input
          placeholder="Insira o título do seu evento"
          type="text"
          id="title"
          className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none text-gray-700"
          {...registerTitle}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium text-base">Endereço</label>
        <input
          placeholder="Insira o endereço do seu evento"
          type="text"
          id="address"
          className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none text-gray-700"
          {...registerLocation}
        />
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label className="font-medium text-base">Data</label>
          <input
            type="date"
            id="date"
            className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none text-gray-700"
            {...registerDate}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="font-medium text-base">Horário</label>
          <input
            type="time"
            id="name"
            className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none text-gray-700"
            {...registerTime}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <label className="font-medium text-base">Categoria do Event</label>
        <div className='grid grid-cols-4 gap-4'>
          {
            typesEvent.map((type) => {
              return (
                <div className='flex flex-row gap-2 items-center ' key={type}>
                  <Checkbox.Root
                    className='h-6 w-6 border border-custom-gray-300 flex items-center justify-center'
                    value={type}
                    checked={true}
                    onCheckedChange={() => handleToggleCategory(type)}
                  >
                    <Checkbox.Indicator id="check">
                      {
                        categories.includes(type) ? <LuCheck className="text-secondary-blue font-bold" size={20} /> : <></>
                      }

                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span>{type}</span>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <label>Valor</label>
        <span className='text-xs font-light text-gray-800'>
          Caso seu evento seja gratuito, o campo deverá ficar vazio.
          Caso haja mais de um setor, basta adicionar à seção.
          Se houver cupom promocional, basta colocar o código no campo "cupom".
        </span>
        <div className='grid grid-cols-3 gap-4'>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium text-base">Preço</label>
            <input
              type="text"
              id="price"
              placeholder='R$ 0,00'
              className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none text-gray-700"
              {...registerPrice}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium text-base">Setor</label>
            <input
              type="text"
              id="sector"
              placeholder='Insira o setor'
              className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none text-gray-700"
              {...registerSector}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium text-base">Cupom</label>
            <input
              type="text"
              id="coupon"
              placeholder='Insira o código'
              className="py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none text-gray-700"
              {...registerCoupons}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium text-base">Descrição</label>
        <textarea
          placeholder="Dê uma descrição que vai embalar o seu público!"
          id="description"
          className="h-[102px] flex py-2 px-5 border-2 border-secondary-blue rounded-lg outline-none text-gray-700"
          {...registerDescription}
        />
      </div>

    </form>
  )
}