import React, {useMemo} from 'react';
import tw from 'tailwind-styled-components';
import value1 from '../../public/value1.png';
import value2 from '../../public/value2.png';
import value3 from '../../public/value3.png';
import {Title} from './Title';
import {Value} from './Value';

const ValueWrapper = tw.div`
  px-4
  py-2
  space-y-6
  md:bg-center
  md:pb-24
  md:bg-cover
  lg:pb-20
  md:px-32
  lg:px-52
  xl:px-64
`;

export const Values: React.FC = () => {
  const values = useMemo(
    () => [
      {
        image: value1,
        altImage: '趣味',
        topic: '不安を受け入れる',
        description:
          'いつも不安に駆られています。ただ、自分のその時点でのスキルじゃ成し遂げられないことに取り組んでいる限り不安はつきものと認識しています。成長の機会と捉え、常に不安という状態に身を置けるようにしています。',
      },
      {
        image: value2,
        altImage: '好きな食べ物',
        topic: 'なぜなぜ思考',
        description:
          'そもそもなぜこれは必要なんだっけ？とよく自分に問いかけます。仕事ではもちろん、プライベートでも物を買う際などの意思決定のシーンでそもそもの目的を考えるような習慣がついています。',
      },
      {
        image: value3,
        altImage: '性格',
        topic: '楽しく生きる',
        description: '生きている限り、楽しさを追い求めたいです。',
      },
    ],
    [],
  );

  return (
    <ValueWrapper>
      <Title id={'values'} titleJa={'価値観'} titleEn={'VALUES'} />
      <div className="flex justify-center bg-white rounded-lg">
        <div className="flex flex-col w-screen space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:p-4">
          {values.map(({image, altImage, topic, description}, index) => {
            const isBorder = values.length - 1 !== index;
            return (
              <Value
                image={image}
                altImage={altImage}
                topic={topic}
                description={description}
                key={`${index}`}
                isBorder={isBorder}
              />
            );
          })}
        </div>
      </div>
    </ValueWrapper>
  );
};
