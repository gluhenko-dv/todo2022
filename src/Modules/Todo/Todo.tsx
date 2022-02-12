import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";
import styles from "./Todo.module.css";


const Todo: React.FC = () => {
  return (
    <section className={styles.todo}>
      <TodoForm />
      <TodoList />
    </section>
  );
};
export default Todo;
