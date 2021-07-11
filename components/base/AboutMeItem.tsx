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
    <div>
      <div>
        {/* 写真 */}
        <Image src={image} alt={altImage} />
      </div>
      <div>
        {/* 私についての要素 */}
        {topic}
      </div>
      <div>
        {/* 私についての要素の説明 */}
        {description}
      </div>
    </div>
  );
};
