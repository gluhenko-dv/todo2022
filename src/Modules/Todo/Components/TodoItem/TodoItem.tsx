import { FormEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../../../App/hooks";
import Button from "../../../../Components";

import { ITodoItem } from "../../Interfaces";
import { todoList, updateTodoList } from "../TodoList/TodoListSlice";
import styles from "./TodoItem.module.css";

interface ITodoItemProps extends ITodoItem {
  idx: number;
}

const TodoItem: React.FC<ITodoItemProps> = ({ item, idx }) => {
  const todoData = useAppSelector(todoList);
  const dispatch = useAppDispatch();

  const deleteItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodoData: ITodoItem[] = [...todoData];
    newTodoData.splice(idx, 1);
    dispatch(updateTodoList(newTodoData));
  };

  return (
    <form className={styles.item} onSubmit={deleteItem}>
      <span>{`${idx + 1}.  ${item}`}</span>
      <Button title="удалить" type="submit" className={styles.deleteButton} />
    </form>
  );
};

export default TodoItem;
