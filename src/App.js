import React from "react";
import "./App.css";
import Title from "./components/Title";
import Roll from "./components/Roll";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {

const [numbers, setNumbers] = React.useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)
const [rolls, setRolls] = React.useState(0)
const [highScore, setHighScore] = React.useState(() => localStorage.getItem('score') || 100)
console.log(`current high: ${highScore}`)
console.log(`current roll: ${rolls}`)

React.useEffect(() => {
  const isDieHeld = numbers.every(num => num.isHeld)
  const firstNum = numbers[0].value
  const sameValue = numbers.every(num => num.value === firstNum)
  if(isDieHeld && sameValue){
    setTenzies(true)
  }
},[numbers])

  function holdDice(id){
    setNumbers(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  function allNewDice(){
    const dice=[]
    for(let i=10; i>0; i-=1){
      dice.push(generateNewDie())
    }
    return dice
  }

  const diceElements = numbers.map((item, index) => {
    return(
      <Die onClick={() => holdDice(item.id)} isHeld={item.isHeld} key={item.id} value={item.value}/>
    )
  })

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    }
  }

  function rollHandler(){
    if(!tenzies){
      setRolls(old => old += 1)
      setNumbers(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
    }else{
      if(rolls < highScore){
        console.log('set new high')
        setHighScore(rolls)
        console.log(`Set high to roll ${highScore}`)
        localStorage.setItem('score', highScore)
      }
      setRolls(0)
      setTenzies(false)
      setNumbers(allNewDice())
    }
  }

  return (
    <main className="App">
      {tenzies && <Confetti />}
      <Title high={localStorage.getItem('score')} roll={rolls}/>
      <div className="game--container">
      {diceElements}
      </div>
      <Roll onWin={tenzies} onClick={rollHandler}/>
    </main>
  );
}

export default App;
