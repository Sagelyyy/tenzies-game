import "./App.css";
import Title from "./components/Title";
import Roll from "./components/Roll";
import Die from "./components/Die";

function App() {
  return (
    <main className="App">
      <Title />
      <div className="game--container">
        <Die value="10" />
        <Die value="10" />
        <Die value="10" />
        <Die value="10" />
        <Die value="10" />
        <Die value="10" />
        <Die value="10" />
        <Die value="10" />
        <Die value="10" />
        <Die value="10" />
      </div>
      <Roll />
    </main>
  );
}

export default App;
