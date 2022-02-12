import { useState, FormEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../App/hooks";
import Button from "../../../../Components";
import { todoList, updateTodoList } from "../TodoList/TodoListSlice";
import styles from "./TodoForm.module.css";

const TodoForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const todoData = useAppSelector(todoList);

  const onInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        updateTodoList([...todoData, { id: Date.now(), item: inputValue }])
      );
      setInputValue("");
    },
    [todoData, inputValue]
  );

  return (
    <form className={styles.todoForm} onSubmit={onSubmit}>
      <input
        className={styles.formInput}
        type="text"
        onInput={onInput}
        value={inputValue}
      />
      <Button title="Добавить" className={styles.succesButton} type="submit" />
    </form>
  );
};

export default TodoForm;
