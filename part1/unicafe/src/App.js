import React, { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({clickHandler, text}) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}

const Statistics = ({text, statistics}) => {

  const sum = (statistics.good + statistics.neutral + statistics.bad);
  const average = (statistics.good - statistics.bad) / sum;
  const positive = statistics.good ? statistics.good / sum * 100 + ' %' : 0 + ' %';

  if (statistics.good === 0 && statistics.neutral === 0 && statistics.bad === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <h1>{text}</h1>
        <table>
          <tbody>
            <Statistic text='positive' count={statistics.good}/>
            <Statistic text='neutral' count={statistics.neutral} />
            <Statistic text='bad' count={statistics.bad} />
            <Statistic text='all' count={sum} />
            <Statistic text='average' count={average} />
            <Statistic text='positive' count={positive} />
          </tbody>
        </table>
      </div>
    )
  }
}

const Statistic = ({text, count}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{count}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const headerText = 'give feedback';

  const goodClickHandler = () => setGood(good + 1);
  const neutralClickHandler = () => setNeutral(neutral + 1);
  const badClickHandler = () => setBad(bad + 1);

  let statistics = {good, neutral, bad};

  return (
    <div>
      <Header text={headerText} />
      <Button clickHandler={goodClickHandler} text='good' />
      <Button clickHandler={neutralClickHandler} text='neutral' />
      <Button clickHandler={badClickHandler} text='bad' />
      <Statistics text='statistics' statistics={statistics} />
    </div>
  )
}

export default App