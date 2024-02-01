import "./index.css";

function App() {
  return (
    <>
      <Title />
      <Calculator />
    </>
  );
}

const Title = () => {
  return (
    <header className="logo">
      <h1 className="title">Cyber Calc</h1>
    </header>
  );
};

const Calculator = () => {
  return (
    <main className="calc-container">
      <Calcs />
      {/* <Calcs>Squat</Calcs>
      <Calcs>Deadlift</Calcs>
      <Calcs>Overhead Press</Calcs> */}
    </main>
  );
};

const Calcs = () => {
  return (
    <div className="calcs">
      <div>
        <select>
          <option value="bench">Bench Press</option>
          <option value="squat">Squat</option>
          <option value="deadlift">Deadlift</option>
          <option value="ohp">Military Press</option>
        </select>
      </div>
      <div>
        <input type="number" placeholder="Weight" min="0" max="1000"></input>
      </div>
      <input
        type="number"
        placeholder="number of reps"
        min="0"
        max="10"
      ></input>
    </div>
  );
};

export default App;
