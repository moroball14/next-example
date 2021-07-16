import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const BarBase = styled.div<{width: number}>`
  width: ${(props) => `${props.width}%`};
`;

const Bar = tw(BarBase)`
  h-full
  bg-teal
  rounded
`;

interface P {
  name: string;
  percent: number;
}

export const SkillBar: React.FC<P> = ({name, percent}) => {
  return (
    <div className="space-y-2">
      <div className="text-teal-dark text-2xl">{name}</div>
      <div className="flex justify-between w-full space-x-2">
        <div className="w-full bg-teal-light rounded">
          <Bar width={percent} />
        </div>
        <div className="text-teal">{percent}%</div>
      </div>
    </div>
  );
};
