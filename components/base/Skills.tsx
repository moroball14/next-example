import Image from 'next/image';
import React from 'react';
import {Title} from './Title';
import skill from '../../public/skill.png';
import {SkillBarBlock} from './SkillBarBlock';

export const Skills: React.FC = () => {
  return (
    <div className="px-4 py-4 pb-16 bg-skillsSp bg-cover bg-no-repeat md:px-10 md:py-14">
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
    </div>
  );
};
