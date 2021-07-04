import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import {HeaderItem} from './HeaderItem';

export const Header: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white">
      <div className="flex items-center flex-no-shrink">
        <Image src={logo} alt={'fwywd'} width={200} height={100} />
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="block flex lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <HeaderItem title={'ABOUT'} />
          <HeaderItem title={'SKILLS'} />
          <HeaderItem title={'VALUES'} />
          <HeaderItem title={'FUTURE'} />
        </div>
      </div>
    </nav>
  );
};
