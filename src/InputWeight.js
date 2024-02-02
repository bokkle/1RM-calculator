const InputWeight = ({ onHandleSetWeight, weight }) => {
  return (
    <input
      type="number"
      min="0"
      max="2000"
      value={weight > 0 ? weight : ""}
      placeholder="Weight (lbs)"
      onChange={(e) => onHandleSetWeight(e)}
    ></input>
  );
};

export default InputWeight;
