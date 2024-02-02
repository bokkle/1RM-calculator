const Button = ({ onHandleClick, children }) => {
  return (
    <button className="buttonpro" onClick={onHandleClick}>
      {children}
    </button>
  );
};

export default Button;
