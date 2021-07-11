import Image from 'next/image';
import React from 'react';

interface P {
  image: StaticImageData;
  altImage: string;
  topic: string;
  description: string;
}

export const AboutMeItem: React.FC<P> = ({
  image,
  altImage,
  topic,
  description,
}) => {
  return (
    <div className="max-w-sm space-y-6 self-center md:self-start">
      <div className="flex justify-center">
        <Image src={image} alt={altImage} />
      </div>
      <div className="flex justify-center font-bold text-3xl text-center">
        {topic}
      </div>
      <div className="break-words leading-loose text-gray-500">
        {description}
      </div>
    </div>
  );
};
