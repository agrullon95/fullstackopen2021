import React, { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({clickHandler, text}) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}

const Statistics = ({text, statistics}) => {
  return (
    <>
      <h1>{text}</h1>
      <Statistic text='good' count={statistics.good}/>
      <Statistic text='neutral' count={statistics.neutral} />
      <Statistic text='bad' count={statistics.bad} />
    </>
  )
}

const Statistic = ({text, count}) => <p>{text} {count}</p> 

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