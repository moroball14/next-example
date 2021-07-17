import Image from 'next/image';
import React from 'react';
import tw from 'tailwind-styled-components';
import skill from '../../public/skill.png';
import {SkillBarBlock} from './SkillBarBlock';
import {Title} from './Title';

const SkillWrapper = tw.div`
  px-4
  py-4
  pb-16
  bg-skillsSp
  bg-cover
  bg-no-repeat
  md:py-14
  md:bg-skills
  md:bg-center
  md:pb-24
  md:bg-cover
  lg:pb-20
  md:px-32
  lg:px-52
  xl:px-64
`;

export const Skills: React.FC = () => {
  return (
    <SkillWrapper>
      <Title id={'skills'} titleJa={'スキル'} titleEn={'SKILLS'} />
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-8">
        <div className="flex flex-wrap content-center">
          <Image src={skill} alt={'skills'} />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="break-words leading-loose text-gray-500">
            スキルはあるのかないのかわかりませんが、一応なんとかフロントエンドを一年とバックエンドを一年やってます
          </div>
          <SkillBarBlock />
        </div>
      </div>
    </SkillWrapper>
  );
};
