import { createSlice } from "@reduxjs/toolkit";

export type ShowSource = "all" | "check" | "un-check";

export interface TaskItem {
  id: string;
  taskText: string;
  check: boolean;
}

export interface StateItem {
  taskList: TaskItem[];
  toShow: ShowSource;
}

const initialState: StateItem = {
  taskList: [],
  toShow: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: StateItem, action) => {
      state.taskList = [...state.taskList, { ...action.payload }];
    },
    showTasks: (state: StateItem, action) => (state.toShow = action.payload),
    deleteTask: (state: StateItem, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload,
      );
    },
    changeCheck: (state: StateItem, action) => {
      state.taskList = state.taskList.map((task) => {
        return task.id === action.payload.id
          ? { ...task, check: !task.check }
          : task;
      });
    },
  },
});

export const { addTask, showTasks, deleteTask, changeCheck } =
  taskSlice.actions;
export default taskSlice.reducer;
