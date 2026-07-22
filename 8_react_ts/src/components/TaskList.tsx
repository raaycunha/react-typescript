import { useReducer } from "react";
import { TaskListReducer } from "../reducers/TaskListReducer";
import type { TaskItem, TaskState } from "../types/tasklist";

const stateInitial: TaskState = {
  allTask: [],
  tasksCompleted: 0,
};

const TaskList = () => {
  const [state, dispatch] = useReducer(TaskListReducer, stateInitial);
  return (
    <div className="m-3">
      <button
        onClick={() => {
          const id = state.allTask.reduce(
            (ac: number, task: TaskItem) => (task ? ac + 1 : ac),
            0,
          );
          const product = {
            id: id,
            title: "Task - A",
            completed: false,
          };
          dispatch({
            type: "ADD_TASK",
            payload: product,
          });
        }}
      >
        Adicionar tarefa
      </button>
      <button
        onClick={() => {
          const id = state.allTask.reduce(
            (ac: number, task: TaskItem) => (task ? ac + 1 : ac),
            0,
          );
          const product = {
            id: id,
            title: "Task - A",
            completed: false,
          };
          dispatch({
            type: "PUT_TASK",
            payload: product.id,
          });
        }}
      >
        Alternar tarefa
      </button>
      <button
        onClick={() => {
          const id = state.allTask.reduce(
            (ac: number, task: TaskItem) => (task ? ac + 1 : ac),
            0,
          );
          const product = {
            id: id,
            title: "Task - A",
            completed: false,
          };
          dispatch({
            type: "REMOVE_TASK",
            payload: product.id,
          });
        }}
      >
        Remover tarefa
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "CLEAN_COMPLETED",
          })
        }
      >
        Limpar concluidos
      </button>
      <button
        onClick={() => {
          const id = state.allTask.reduce(
            (ac: number, task: TaskItem) => (task ? ac + 1 : ac),
            0,
          );
          const product = {
            id: id,
            title: "Task - A",
            completed: false,
          };
          dispatch({
            type: "EDIT_TITLE",
            payload: {
              id: product.id,
              newTitle: "Hello",
            },
          });
        }}
      >
        Editar titulo
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "MARK_ALL",
            payload: true,
          })
        }
      >
        Marcar todos
      </button>
    </div>
  );
};

export default TaskList;
