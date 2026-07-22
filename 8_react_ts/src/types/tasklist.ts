export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskState {
  allTask: TaskItem[];
  tasksCompleted: number;
}

interface EditTitlePayload {
  id: number;
  newTitle: string;
}

type ToggleTaskPayload = number;
type RemoveTaskPayload = number;
type MarkAllTaskPayload = boolean;

export type TaskAction =
  | { type: "ADD_TASK"; payload: TaskItem }
  | { type: "PUT_TASK"; payload: ToggleTaskPayload }
  | { type: "REMOVE_TASK"; payload: RemoveTaskPayload }
  | { type: "CLEAN_COMPLETED" }
  | { type: "EDIT_TITLE"; payload: EditTitlePayload }
  | { type: "MARK_ALL"; payload: MarkAllTaskPayload };
