import React from 'react';

interface Props {
  href: string;
  title: string;
}

export const HeaderItem: React.FC<Props> = ({href, title}) => {
  return (
    <a
      href={`#${href}`}
      className="block text-1xl inline-block text-teal-light hover:text-teal-dark md:mr-4 md:text-2xl"
    >
      {title}
    </a>
  );
};
