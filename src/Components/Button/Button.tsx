
interface IButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  className: string;
}

const Button: React.FC<IButtonProps> = ({ title, type, className }) => {
  return (
    <button className={className} type={type}>
      {title}
    </button>
  );
};

export default Button;
