import React from 'react';
import {SkillBar} from './SkillBar';

export const SkillBarBlock: React.FC = () => {
  const skillSet = [
    {name: 'React', percent: 40},
    {name: 'Typescript', percent: 40},
    {name: 'Firebase', percent: 30},
    {name: 'Ruby on Rails', percent: 20},
  ];

  return (
    <div className="bg-white p-6 rounded space-y-6">
      {skillSet.map(({name, percent}, index) => (
        <SkillBar name={name} percent={percent} key={index} />
      ))}
    </div>
  );
};
