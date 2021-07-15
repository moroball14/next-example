import React from 'react';
import {SkillBar} from './SkillBar';

export const SkillBarBlock: React.FC = () => {
  const skillSet = [
    {skill: 'React', percent: 40},
    {skill: 'Typescript', percent: 20},
  ];

  return (
    <div className="bg-white p-6 rounded space-y-6">
      {skillSet.map(({skill, percent}, index) => (
        <SkillBar skill={skill} percent={percent} key={index} />
      ))}
    </div>
  );
};
