import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  title: string;
}

export const HeaderItem: React.FC<Props> = ({href, title}) => {
  return (
    <Link href={`#${href}`}>
      <a className="block text-1xl text-teal hover:text-teal-dark md:mr-4 md:text-2xl">
        {title}
      </a>
    </Link>
  );
};
