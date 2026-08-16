import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./app/store";
import {
  addTask,
  changeCheck,
  deleteTask,
  showTasks,
  type ShowSource,
  type TaskItem,
} from "./features/tasks/tasksSlice";

function App() {
  const [taskUser, setTaskUser] = useState<string>("");
  const taskList = useSelector(
    (state: RootState) => state.tasks.taskList,
  ) as TaskItem[];
  const toShow = useSelector(
    (state: RootState) => state.tasks.toShow,
  ) as ShowSource;
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idTask = crypto.randomUUID();
    const task: TaskItem = {
      id: idTask,
      taskText: taskUser,
      check: false,
    };
    dispatch(addTask(task));
    setTaskUser("");
  };
  console.log("TaskList:", taskList, "toShow:", toShow);
  const classButton =
    "h-9 bg-gray-300 px-2 cursor-pointer rounded-md transition-colors duration-400 hover:bg-gray-400";
  const taskShow = (task: TaskItem) => {
    if (toShow === "all") return "flex";
    else {
      if (toShow === "check") {
        return task.check ? "flex" : "hidden";
      } else if (toShow === "un-check") {
        return !task.check ? "flex" : "hidden";
      }
    }
  };
  return (
    <div className="flex flex-col items-center gap-6 text-lg bg-white p-6 mt-20 rounded-xl">
      <h1 className="font-bold text-center">Lista de Tarefas com Redux</h1>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          className="h-9 px-2 border rounded-md"
          type="text"
          name="task"
          placeholder="Adicione sua tarefa..."
          title="Adicione sua tarefa"
          minLength={1}
          required
          value={taskUser}
          onChange={(e) => setTaskUser(e.target.value)}
        />
        <button type="submit" className={classButton}>
          Adicionar
        </button>
      </form>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(showTasks("all"))}
          className={classButton}
        >
          Todas
        </button>
        <button
          onClick={() => dispatch(showTasks("check"))}
          className={classButton}
        >
          Completas
        </button>
        <button
          onClick={() => dispatch(showTasks("un-check"))}
          className={classButton}
        >
          Incompletas
        </button>
      </div>
      {taskList &&
        taskList.map((task) => (
          <div
            onClick={() => dispatch(changeCheck(task))}
            className={`justify-between ${taskShow(task)}`}
            key={task.id}
          >
            <span>{task.taskText}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteTask(task.id));
              }}
            >
              Deletar
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
