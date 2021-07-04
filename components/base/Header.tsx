import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import {HeaderItem} from './HeaderItem';

export const Header: React.FC = () => {
  return (
    <nav className="flex flex-col items-center justify-center flex-wrap bg-white lg:justify-between lg:flex-row">
      <div className="flex items-center flex-no-shrink">
        <Image src={logo} alt={'fwywd'} width={200} height={100} />
      </div>
      <div className="block flex items-center lg:w-auto">
        <div className="flex flex-row justify-between px-12 w-screen lg:w-auto lg:px-0">
          <HeaderItem title={'ABOUT'} />
          <HeaderItem title={'SKILLS'} />
          <HeaderItem title={'VALUES'} />
          <HeaderItem title={'FUTURE'} />
        </div>
      </div>
    </nav>
  );
};
