import { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { todoList } from "../../Store/TodoListSlice";
import styles from "./TodoList.module.css";
import { ITodoItem } from "../../Interfaces";
import { useAppSelector } from "../../../../App/hooks";

const TodoList: React.FC = () => {
  const todoData: ITodoItem[] = useAppSelector(todoList);

  useEffect(() => {
    if (todoData.length > 0) localStorage.todo2020 = JSON.stringify(todoData);
  }, [todoData]);

  return (
    <div className={styles.todoList}>
      {todoData.map((item, idx: number) => (
        <TodoItem {...item} key={item.id} idx={idx} />
      ))}
    </div>
  );
};
export default TodoList;
