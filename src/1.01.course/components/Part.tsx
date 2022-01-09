import React from 'react'

interface PartProps {
  name: string
  exercises: number
}

const Part = ({ name, exercises }: PartProps) => {
  return (
    <div>{name} {exercises}</div>
  );
};

export default Part;