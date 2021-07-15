import React from 'react';
import styled from 'styled-components';

const Bar = styled.div<{width: number}>`
  width: ${(props) => `${props.width}%`};
`;

interface P {
  skill: string;
  percent: number;
}

export const SkillBar: React.FC<P> = ({skill, percent}) => {
  return (
    <div className="space-y-2">
      <div className="text-teal-dark text-2xl">{skill}</div>
      <div className="flex justify-between w-full space-x-2">
        <div className="w-full bg-teal-light rounded">
          <Bar className="h-full bg-teal rounded" width={percent} />
        </div>
        <div className="text-teal">{percent}%</div>
      </div>
    </div>
  );
};
