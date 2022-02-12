import React from "react";
import "./App.css";
import Title from "./components/Title";
import Roll from "./components/Roll";
import Die from "./components/Die";

function App() {

const [numbers, setNumbers] = React.useState(allNewDice())

  function allNewDice(){
    const dice=[]
    for(let i=10; i>0; i-=1){
      dice.push(Math.ceil(Math.random() * 6))
    }
    return dice
  }

  const diceElements = numbers.map((item, index) => {
    return(
      <Die key={index} value={item}/>
    )
  })
  return (
    <main className="App">
      <Title />
      <div className="game--container">
      {diceElements}
      </div>
      <Roll />
    </main>
  );
}

export default App;
