import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../App/hooks";
import { ITodoItem } from "../../Interfaces";
import TodoInput from "../TodoInput/TodoInput";
import { todoList, updateTodoList } from "../../Store/TodoListSlice";

interface TodoEditProps {
  id?: number;
  idx?: number;
  item?: string;
  type: "add" | "edit";
  setIsOpen: (param: boolean) => void;
}

const TodoUpdate: React.FC<TodoEditProps> = ({
  id,
  idx,
  item,
  type,
  setIsOpen,
}) => {
  const [inputValue, setInputValue] = useState(item || "");
  const todoData: ITodoItem[] = useAppSelector(todoList);
  const dispatch = useAppDispatch();

  const updateTodoData = useCallback(() => {
    if (!inputValue) {
      alert("Заполните поле!");
      return;
    }

    switch (type) {
      case "add":
        dispatch(
          updateTodoList([...todoData, { id: Date.now(), item: inputValue }])
        );
        break;
      case "edit":
        if (!idx || !id) return;
        const newTodoData = [...todoData];
        newTodoData[idx] = { id, item: inputValue };
        dispatch(updateTodoList(newTodoData));
    }

    setIsOpen(false);
    setInputValue("");
  }, [inputValue, todoData, idx]);

  return (
    <TodoInput
      inputValue={inputValue}
      setInputValue={setInputValue}
      onClick={updateTodoData}
      buttonTitle={type === "add" ? "Добавить" : "Принять"}
    />
  );
};

export default TodoUpdate;
