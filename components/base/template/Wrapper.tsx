import React from 'react';

export const Wrapper: React.FC = ({children}) => {
  return (
    <div className="px-4 py-2 space-y-6 md:bg-center md:pb-24 md:bg-cover lg:pb-20 md:px-32 lg:px-52 xl:px-64">
      {children}
    </div>
  );
};
