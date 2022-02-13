import { useCallback } from "react";
import { Button } from "../../../../Components";
import styles from "./TodoInput.module.css";

interface ITodoInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onClick: () => void;
  buttonTitle: string;
}

const TodoInput: React.FC<ITodoInputProps> = ({
  inputValue,
  setInputValue,
  onClick,
  buttonTitle,
}) => {
  const onInput = useCallback((e) => setInputValue(e.target.value), []);
  return (
    <div className={styles.TodoInput}>
      <textarea
        className={styles.formInput}
        onInput={onInput}
        value={inputValue}
      />
      <Button
        title={buttonTitle}
        className={styles.succesButton}
        onClick={onClick}
      />
    </div>
  );
};

export default TodoInput;
