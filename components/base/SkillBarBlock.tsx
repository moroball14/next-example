import React from 'react';
import {SkillBar} from './SkillBar';

export const SkillBarBlock: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded space-y-6">
      <SkillBar />
      <SkillBar />
      <SkillBar />
      <SkillBar />
    </div>
  );
};
