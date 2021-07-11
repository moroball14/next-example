import React from 'react';
import {AboutMeItem} from './AboutMeItem';
import {Title} from './Title';
import about1 from '../../public/about-1.png';

export const AboutMe: React.FC = () => {
  return (
    <div className="p-2 md:px-10">
      <Title titleJa={'私について'} titleEn={'ABOUT'} />
      <div className="flex justify-center">
        <div className="flex flex-col w-screen space-y-6 md:space-y-0 md:space-x-4 md:grid md:grid-cols-3">
          <AboutMeItem
            image={about1}
            altImage={'趣味'}
            topic={'趣味'}
            description={
              'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge'
            }
          />
          <AboutMeItem
            image={about1}
            altImage={'趣味'}
            topic={'趣味'}
            description={
              'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge'
            }
          />
          <AboutMeItem
            image={about1}
            altImage={'趣味'}
            topic={'趣味'}
            description={
              'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge'
            }
          />
        </div>
      </div>
    </div>
  );
};
