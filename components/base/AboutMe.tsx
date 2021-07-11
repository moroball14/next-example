import React from 'react';
import {AboutMeItem} from './AboutMeItem';
import {Title} from './Title';
import about1 from '../../public/about-1.png';

export const AboutMe: React.FC = () => {
  return (
    <div className="p-2">
      <Title titleJa={'私について'} titleEn={'ABOUT'} />
      <div>
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
  );
};
