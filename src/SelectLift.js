const SelectLift = ({ onHandleSetLift, lift }) => {
  return (
    // <div style={{ textAlign: "center" }}>
      <select
        onChange={(e) => onHandleSetLift(e)}
        value={lift}
      >
        <option value="" disabled hidden>
          Select Lift
        </option>
        <option value="Bench">Bench Press</option>
        <option value="Squat">Squat</option>
        <option value="Deadlift">Deadlift</option>
        <option value="OHP">Overhead Press</option>
      </select>
    // </div>
  );
};

export default SelectLift;
