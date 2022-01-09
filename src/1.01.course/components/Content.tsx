import React from 'react'
import Part from './Part'

interface ContentProps {
  parts: Array<PartProps>
}

interface PartProps {
  id: number
  name: string
  exercises: number
}

const Content = ({ parts }: ContentProps) => {
  return (
    <>
      {parts.map(part => 
        <Part
          key={part.id}
          name={part.name}
          exercises={part.exercises}
        ></Part>
      )}
      <div>total of {parts.reduce((sum, current) => sum + current.exercises, 0)} exercises</div>
    </>
  );
};

export default Content;