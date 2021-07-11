import React from 'react';

interface Props {
  title: string;
}

export const HeaderItem: React.FC<Props> = ({title}) => {
  return (
    <a
      href="#responsive-header"
      className="block text-1xl inline-block text-teal-light hover:text-teal-dark md:mr-4 md:text-2xl"
    >
      {title}
    </a>
  );
};
