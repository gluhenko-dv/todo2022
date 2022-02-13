import { useCallback, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../App/hooks";
import { Button, Modal } from "../../../../Components";
import { toggleBodyOverflow } from "../../../../Utils/helpers";
import { ITodoItem } from "../../Interfaces";
import TodoUpdate from "../TodoUpdate/TodoUpdate";
import { todoList, updateTodoList } from "../../Store/TodoListSlice";
import styles from "./TodoItem.module.css";

interface ITodoItemProps extends ITodoItem {
  idx: number;
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, item, idx }) => {
  const todoData = useAppSelector(todoList);
  const dispatch = useAppDispatch();

  const deleteItem = () => {
    const newTodoData: ITodoItem[] = [...todoData];
    newTodoData.splice(idx, 1);
    dispatch(updateTodoList(newTodoData));
  };

  const [isOpen, setIsOpen] = useState(false);
  const onClickOpenModal = useCallback(() => {
    setIsOpen(true);
    toggleBodyOverflow(true);
  }, []);

  return (
    <div>
      <article className={styles.item} onSubmit={deleteItem}>
        <span className={styles.itemText} onClick={onClickOpenModal}>
          {`${idx + 1}.  ${item}`}
        </span>
        <Button
          title="удалить"
          className={styles.deleteButton}
          onClick={deleteItem}
        />
      </article>
      <Modal title="Редактировать дело" isOpen={isOpen} setIsOpen={setIsOpen}>
        <TodoUpdate idx={idx} id={id} item={item} type="edit" setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
};

export default TodoItem;
