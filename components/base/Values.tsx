import React from 'react';
import {Title} from './Title';

export const Values: React.FC = () => {
  return (
    <div className="px-4 py-2 md:bg-about  md:bg-center md:pb-24 md:bg-cover lg:pb-20 md:px-32 lg:px-52 xl:px-64">
      <Title id={'values'} titleJa={'価値観'} titleEn={'VALUES'} />
      <div className="flex justify-center">
        <div className="flex flex-col w-screen space-y-6 md:space-y-0 md:space-x-4 md:grid md:grid-cols-3">
          {/* {profiles.map(({image, altImage, topic, description}, index) => (
        <AboutMeItem
          image={image}
          altImage={altImage}
          topic={topic}
          description={description}
          key={`${index}`}
        />
      ))} */}
        </div>
      </div>
    </div>
  );
};
