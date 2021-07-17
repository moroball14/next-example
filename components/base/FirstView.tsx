import Image from 'next/image';
import React from 'react';
import hero from '../../public/hero.png';

export const FirstView: React.FC = () => {
  return (
    <div className="flex flex-col justify-between space-y-4 bg-teal-dark w-screen p-8 md:bg-auto md:flex-row md:px-12">
      <div className="flex justify-center">
        <div className="flex flex-col min-h-36 space-y-6 self-center text-center md:text-left">
          <div className="text-6xl text-white">Daiki Morokoshi</div>

          <div className="text-4xl text-teal-light">Frontend Developer</div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center w-3/4 md:w-auto md:h-auto">
          <Image src={hero} alt={'hero'} />
        </div>
      </div>
    </div>
  );
};
