import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../App/store";
import { ITodoItem } from "../Interfaces";

export interface TodoListState {
  items: ITodoItem[];
  status: "idle" | "loading" | "failed";
}

const initialState: TodoListState = {
  items: localStorage.todo2020 ? JSON.parse(localStorage.todo2020) : [],
  status: "idle",
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    updateTodoList: (state, action: PayloadAction<ITodoItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { updateTodoList } = todoListSlice.actions;

export const todoList = (state: RootState) => state.todoList.items;

export default todoListSlice.reducer;
