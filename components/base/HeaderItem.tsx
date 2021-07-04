import React from 'react';

interface Props {
  title: string;
}

export const HeaderItem: React.FC<Props> = ({title}) => {
  return (
    <a
      href="#responsive-header"
      className="block text-2xl mt-4 lg:inline-block lg:mt-0 text-teal-light hover:text-teal-dark mr-4"
    >
      {title}
    </a>
  );
};
