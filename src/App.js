import React from "react";
import "./App.css";
import Title from "./components/Title";
import Roll from "./components/Roll";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {

const [numbers, setNumbers] = React.useState(allNewDice())

  function allNewDice(){
    const dice=[]
    for(let i=10; i>0; i-=1){
      dice.push({
        value: Math.ceil(Math.random() * 6), 
        isHeld: true,
        id: nanoid()
      })
    }
    return dice
  }

  const diceElements = numbers.map((item, index) => {
    return(
      <Die isHeld={item.isHeld} key={item.id} value={item.value}/>
    )
  })

  function rollHandler(){
    setNumbers(allNewDice())
  }

  return (
    <main className="App">
      <Title />
      <div className="game--container">
      {diceElements}
      </div>
      <Roll onClick={rollHandler}/>
    </main>
  );
}

export default App;
