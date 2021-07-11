import React from 'react';

interface P {
  titleJa: string;
  titleEn: string;
}

export const Title: React.FC<P> = ({titleJa, titleEn}) => {
  return (
    <div>
      {titleJa}と{titleEn}
    </div>
  );
};
