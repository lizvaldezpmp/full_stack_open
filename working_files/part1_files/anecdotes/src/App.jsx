//  Part 1d - Exercise 1.12 Anecdotes

import { useState } from 'react'


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const App = () => {

  const handleVote = (votes) => {
    console.log ("in handleVote")
    const updatedVotes = [...votes]
    console.log ("copy", selected, " was ",copy[selected])
    updatedVotes[selected]+=1
    setVotes (updatedVotes)
    console.log ("copy", selected, " is ",copy[selected])
  
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // save votes to its own state
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  console.log ("votes is", votes)

  const copy = [...votes]
  const maxvotes = Math.max(...copy);
  const maxindex = copy.indexOf(maxvotes)
 
  // Need to use state variables.
  const [selected, setSelected] = useState(getRandomInt(0,anecdotes.length))
  console.log ("copy is ", copy)
  console.log ("selected is ", selected)
  console.log("max votes is ",{maxvotes})
  console.log("max votes index is ",{maxvotes})


  return (
    
    <div>
      <h1>Anecdote of the day</h1>

      {anecdotes[selected]}
      has  {copy [selected]} votes
      
      <br /> <br /> 

      <button onClick={() => handleVote(votes)}>
         vote </button>

      <button onClick={() => setSelected(getRandomInt(0, 7))}>
        next anecdote </button>

        <h1>Anecdote with most votes </h1> 

        {anecdotes [maxindex]} <br></br>
        has {maxvotes} votes

    </div>
    
  )
}

export default App