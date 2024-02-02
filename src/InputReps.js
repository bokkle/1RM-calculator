const InputReps = ({ onHandleSetReps, reps }) => {
  return (
    <input
      type="number"
      value={reps > 0 ? reps : ""}
      placeholder="# of reps (1-10)"
      min="1"
      max="10"
      onChange={(e) => onHandleSetReps(e)}
    ></input>
  );
};

export default InputReps;
