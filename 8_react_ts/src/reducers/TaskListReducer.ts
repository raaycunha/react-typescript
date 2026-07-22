import type { TaskAction, TaskItem, TaskState } from "../types/tasklist";

export const TaskListReducer = (state: TaskState, action: TaskAction) => {
  const verificarTasks = (tasks: TaskItem[]): number => {
    return tasks.reduce(
      (ac: number, task: TaskItem) => (task.completed ? ac + 1 : ac),
      0,
    );
  };
  switch (action.type) {
    case "ADD_TASK": {
      const newList = [...state.allTask, action.payload];
      return {
        allTask: newList,
        tasksCompleted: verificarTasks(newList),
      };
    }
    case "REMOVE_TASK": {
      const newList = state.allTask.filter(
        (task) => task.id !== action.payload,
      );
      return {
        allTask: newList,
        tasksCompleted: verificarTasks(newList),
      };
    }
    case "PUT_TASK": {
      const newList = state.allTask.map((task) => {
        if (task.id === action.payload)
          return { ...task, completed: !task.completed };
        else return task;
      });
      return {
        allTask: newList,
        tasksCompleted: verificarTasks(newList),
      };
    }
    case "CLEAN_COMPLETED": {
      const newList = state.allTask.filter((task) => task.completed !== true);
      return {
        allTask: newList,
        tasksCompleted: verificarTasks(newList),
      };
    }
    case "EDIT_TITLE": {
      const newList = state.allTask.map((task) => {
        if (action.payload.id === task.id)
          return { ...task, title: action.payload.newTitle };
        else return task;
      });
      return {
        allTask: newList,
        tasksCompleted: verificarTasks(newList),
      };
    }
    case "MARK_ALL": {
      const newList = state.allTask.map((task) => {
        return { ...task, completed: action.payload };
      });
      return {
        allTask: newList,
        tasksCompleted: verificarTasks(newList),
      };
    }
    default:
      return state;
  }
};
