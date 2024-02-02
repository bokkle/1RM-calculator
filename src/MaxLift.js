const MaxLift = ({ lift, weight, reps, max }) => {
  return (
    <>
      <h3 className="max">
        Your maximum <span className="green">{lift}</span> is{" "}
        <span className="green">{max}lbs</span>
      </h3>
      <h4 className="based">
        (Based on {weight}lbs for {reps} reps)
      </h4>
    </>
  );
};

export default MaxLift;
