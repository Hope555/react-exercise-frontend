import React, { useState } from 'react'

interface AnecdotesContentProps {
  title: string,
  content: string,
  vote: number,
}

const AnecdotesContent = ({title, content, vote}: AnecdotesContentProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>has {vote} votes</div>
    </>
  );
}

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const initPoints = Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initPoints)

  const vote = () => {
    let newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  }
  
  const clickHandler = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length);
    while (randomNumber === selected) {
      randomNumber = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(randomNumber);
  }

  const getMaxVoteIndex = () => {
    let maxPoint = 0;
    let maxPointIndex = 0;
    points.forEach((point, index) => {
      if (maxPoint < point) {
        maxPoint = point;
        maxPointIndex = index;
      }
    });
    return maxPointIndex;
  }

  return (
    <div>
      <AnecdotesContent
        title="Anecdote of the day"
        content={anecdotes[selected]}
        vote={points[selected]}
      ></AnecdotesContent>
      <button onClick={vote}>vote</button>
      <button onClick={clickHandler}>next anecdote</button>
      <AnecdotesContent
        title="Anecdote with most votes"
        content={anecdotes[getMaxVoteIndex()]}
        vote={points[getMaxVoteIndex()]}
      ></AnecdotesContent>
    </div>
  )
}

export default Anecdotes;