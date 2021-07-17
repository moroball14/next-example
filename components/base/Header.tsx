import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import {HeaderItem} from './HeaderItem';

export const Header: React.FC = () => {
  return (
    <nav className="flex flex-col items-center justify-center flex-wrap bg-white pb-6 md:justify-between md:flex-row md:pb-0">
      <div className="flex items-center flex-no-shrink">
        <Image src={logo} alt={'fwywd'} width={200} height={100} />
      </div>
      <div className="block items-center md:w-auto">
        <div className="flex flex-row justify-between px-12 w-screen md:w-auto md:px-0">
          <HeaderItem href={'about'} title={'ABOUT'} />
          <HeaderItem href={'skills'} title={'SKILLS'} />
          <HeaderItem href={'values'} title={'VALUES'} />
          <HeaderItem href={'future'} title={'FUTURE'} />
        </div>
      </div>
    </nav>
  );
};
