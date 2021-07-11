import Image from 'next/image';
import React from 'react';
import {Title} from './Title';
import skill from '../../public/skill.png';
import {SkillBarBlock} from './SkillBarBlock';

export const Skills: React.FC = () => {
  return (
    <div className="px-4 py-2 pb-16 bg-skillsSp bg-cover space-y-4 bg-no-repeat md:px-10">
      <Title id={'skills'} titleJa={'スキル'} titleEn={'Skills'} />
      <div className="flex flex-wrap content-center">
        <Image src={skill} alt={'skills'} />
      </div>
      <div className="break-words leading-loose text-gray-500">
        スキルはあるのかないのかわかりませんが、一応なんとかフロントエンドを一年とバックエンドを一年やってます
      </div>
      <SkillBarBlock />
    </div>
  );
};
