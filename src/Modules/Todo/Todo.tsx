import { useCallback, useState } from "react";
import { Modal } from "../../Components";
import { toggleBodyOverflow } from "../../Utils/helpers";
import TodoInput from "./Components/TodoInput/TodoInput";

import TodoList from "./Components/TodoList/TodoList";
import TodoUpdate from "./Components/TodoUpdate/TodoUpdate";
import styles from "./Todo.module.css";

const Todo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickOpenModal = useCallback(() => {
    setIsOpen(true);
    toggleBodyOverflow(true);
  }, []);

  return (
    <section className={styles.todo}>
      <TodoList />
      <button className={styles.addButton} onClick={onClickOpenModal}>
        +
      </button>
      <Modal title="Добавить дело" isOpen={isOpen} setIsOpen={setIsOpen}>
        <TodoUpdate type="add" setIsOpen={setIsOpen}/>
      </Modal>
    </section>
  );
};
export default Todo;
