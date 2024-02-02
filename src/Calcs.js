import { useState } from "react";
import MaxLift from "./MaxLift";
import Button from "./Button";
import InputReps from "./InputReps";
import InputWeight from "./InputWeight";
import SelectLift from "./SelectLift"; 

const Calcs = () => {
  const [lift, setLift] = useState("");
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [calculate, setCalculate] = useState(false);

  const max = Math.round(weight * (reps * 0.03 - 0.03 + 1));

  const handleSetLift = (e) => setLift(e.target.value);

  const handleSetWeight = (e) => setWeight(Number(e.target.value));

  const handleSetReps = (e) => setReps(Number(e.target.value));

  const handleCalculate = () => {
    if (max < 1) return;
    setCalculate(!calculate);
  };

  const handleReset = () => {
    setLift("");
    setWeight(0);
    setReps(0);
    setCalculate(false);
  };

  return (
    <div className="calcs">
      {!calculate ? (
        <SelectLift onHandleSetLift={handleSetLift} lift={lift} />
      ) : (
        ""
      )}
      {!calculate ? (
        <InputWeight weight={weight} onHandleSetWeight={handleSetWeight} />
      ) : (
        ""
      )}
      {!calculate ? (
        <InputReps reps={reps} onHandleSetReps={handleSetReps} />
      ) : (
        ""
      )}
      {!calculate ? (
        <Button onHandleClick={handleCalculate}>
          <span>Calculate</span>
        </Button>
      ) : (
        <Button onHandleClick={handleReset}>
          <span>Reset</span>
        </Button>
      )}
      {max > 0 && calculate && (
        <MaxLift lift={lift} weight={weight} reps={reps} max={max} />
      )}
    </div>
  );
};

export default Calcs;
