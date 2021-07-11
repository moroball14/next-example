import React from 'react';

export const SkillBar: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="text-teal-dark text-2xl">React</div>
      <div className="flex justify-between w-full space-x-2">
        <div className="w-full bg-teal-light rounded">
          <div className="w-1/2 h-full bg-teal rounded"></div>
        </div>
        <div className="text-teal">20%</div>
      </div>
    </div>
  );
};
