interface IButtonProps {
  title: string;
  onClick: () => void;
  className: string;
}

const Button: React.FC<IButtonProps> = ({ title, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
