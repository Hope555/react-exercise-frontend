import { MouseEventHandler, useState } from 'react'

interface ButtonProps {
  text: string,
  handleClick: MouseEventHandler,
}

const Button = ({text, handleClick}: ButtonProps) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

interface StatisticLineProps {
  text: string,
  value: number | string,
}

const StatisticLine = ({text, value}: StatisticLineProps) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

interface StatisticsProps {
  good: number,
  neutral: number,
  bad: number,
}

const Statistics = ({good, neutral, bad}: StatisticsProps) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <>
        <h3>statistics</h3>
        <div>No feedback given</div>
      </>
    );
  } else {
    return (
      <>
        <h3>statistics</h3>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}></StatisticLine>
            <StatisticLine text="neutral" value={neutral}></StatisticLine>
            <StatisticLine text="bad" value={bad}></StatisticLine>
            <StatisticLine text="all" value={all}></StatisticLine>
            <StatisticLine text="average" value={(good - bad) / all}></StatisticLine>
            <StatisticLine text="positive" value={(good / all) + '%'}></StatisticLine>
          </tbody>
        </table>
      </>
    );
  }
};

const Unicafe = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h3>give feedback</h3>
      <Button text="good" handleClick={() => setGood(good + 1)}></Button>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}></Button>
      <Button text="bad" handleClick={() => setBad(bad + 1)}></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      ></Statistics>
    </div>
  )
}

export default Unicafe