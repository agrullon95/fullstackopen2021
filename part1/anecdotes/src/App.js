import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [anecdoteVotes, setAnecdoteVotes] = useState(new Array(7).fill(0));
  const [mostVotes, setMostVotes] = useState([0]);

  const handleNextAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteClick = () => {
    var votes = [...anecdoteVotes];
    votes[selected] += 1;

    if (votes[selected] > votes[mostVotes[0]]) {
      setMostVotes([selected]);
    } else if (votes[selected] === votes[mostVotes[0]]) {
      setMostVotes(mostVotes.concat(selected));
    }

    setAnecdoteVotes(votes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {anecdoteVotes[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextAnecdoteClick}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVotes[0]]}</p>
      <p>has {anecdoteVotes[mostVotes[0]]} votes</p>
    </div>
  )
}

export default App