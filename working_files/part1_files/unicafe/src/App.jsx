//  Part 1d - Exercises 1.6 - 1.11

import { useState } from 'react'
import  './App.css' 


const StatisticLine = ({text, value} ) => {

  return (
    <tr>
      <td>{text}</td>  
      <td>{value}</td>
    </tr>
  )
}


const Statistics = (props) => {

   const all = props.good + props.neutral + props.bad
   const average = ((props.good*1) + (props.bad * -1)) / all
   const positive = (props.good / all) * 100 
   console.log ("all is " , all)
   console.log ("average is" , average)
   console.log ("positive is ", positive)
  if (all > 0)
  {
    return(
      <table>
    
        <tbody>
        <h1>statistics</h1>
      
        <StatisticLine text = "good" value = {props.good} />
        <StatisticLine text = "neutral" value = {props.neutral} />
        <StatisticLine text = "bad" value = {props.bad} />
        <StatisticLine text = "all" value = {all} />
        <StatisticLine text = "average" value = {`${average.toFixed(2)}`} />
        <StatisticLine text="positive"  value = {`${positive.toFixed(2)}%`} />
        
        </tbody>
      </table>

    ) 
  }
  return(
    <div>
      <br />
      No feedback given
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

     <h1> give feedback </h1>
    <button onClick={() => setGood(good + 1)}>  good</button>
    <button onClick={() => setNeutral(neutral + 1)}>  neutral</button>
    <button onClick={() => setBad(bad + 1)}>  bad</button>

  
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App