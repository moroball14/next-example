import React from 'react';
import {AboutMeItem} from './AboutMeItem';
import {Title} from './Title';
import about1 from '../../public/about-1.png';

export const AboutMe: React.FC = () => {
  return (
    <div>
      <Title titleJa={'私について'} titleEn={'About me'} />
      <div>
        <AboutMeItem
          image={about1}
          altImage={'趣味'}
          topic={'趣味'}
          description={'hogehoge'}
        />
      </div>
    </div>
  );
};
