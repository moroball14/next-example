import React, {useMemo} from 'react';
import about1 from '../../public/about-1.png';
import about2 from '../../public/about-2.png';
import about3 from '../../public/about-3.png';
import {AboutMeItem} from './AboutMeItem';
import {Title} from './Title';

export const AboutMe: React.FC = () => {
  const profiles = useMemo(
    () => [
      {
        image: about1,
        altImage: '趣味',
        topic: '趣味',
        description:
          'サッカー/フットサルと読書です。小学二年生から大学卒業するまでサッカーをしておりました。社会人になってからも、知り合いの社会人チームに参加するなど、定期的に運動しています。また大学時代の仲間とフットサルも始めました。',
      },
      {
        image: about2,
        altImage: '好きな食べ物',
        topic: '好きな食べ物',
        description:
          'ニンニクが好きです。これでもかというくらいラーメンにニンニクを入れます。',
      },
      {
        image: about3,
        altImage: '性格',
        topic: '性格',
        description:
          '1対1など、少人数での集まりで人の話を聞くのが好きです。気持ちよく話してもらうためにはどうすればいいかを考えます。',
      },
    ],
    [],
  );
  return (
    <div className="px-4 py-2 md:bg-about md:bg-auto md:px-32 lg:px-52 xl:px-64">
      <Title id={'about'} titleJa={'私について'} titleEn={'ABOUT'} />
      <div className="flex justify-center">
        <div className="flex flex-col w-screen space-y-6 md:space-y-0 md:space-x-4 md:grid md:grid-cols-3">
          {profiles.map(({image, altImage, topic, description}, index) => (
            <AboutMeItem
              image={image}
              altImage={altImage}
              topic={topic}
              description={description}
              key={`${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
