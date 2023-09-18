'use client';

import { ChangeEvent, useState } from 'react';

interface IInputFileProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


export function InputFile({ onChange }: IInputFileProps) {
  // const [file, setFile] =  useState<File | null>(null);
  const [preview, setPreview] = useState<String>('');

  const blankUrl = '../../../public/blank-image.png';

  // function convertImageToBase64(imgUrl: string, callback: any) {
  //   const image = new Image();
  //   image.crossOrigin='anonymous';
  //   image.onload = () => {
  //     const canvas = document.createElement('canvas');
  //     const ctx = canvas.getContext('2d');
  //     canvas.height = image.naturalHeight;
  //     canvas.width = image.naturalWidth;
  //     ctx?.drawImage(image, 0, 0);
  //     const dataUrl = canvas.toDataURL();
  //     callback && callback(dataUrl)
  //   }

  //   image.src = imgUrl;
  //   return image.src;
  // }

  // function handleFileChange(file: any){
  //     setFile(file);
  // };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const image: any = e.target.files?.[0] || null;

    if (image) {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        const base64String = e.target?.result;

        setPreview(base64String as string);
      };
      reader.readAsDataURL(image);
      onChange(image);
    }
  };

  // const blank = convertImageToBase64(blankUrl, () => { });

  return (
    <>
      {preview ? (
        <div
          className="w-full h-full cursor-pointer bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url(${preview})` }}
        ></div>
      ) : (
        <input
          type="file"
          className="block w-full h-full opacity-0 cursor-pointer rounded-3xl"
          onChange={handleChange}
        />
      )}
    </>
  );
};