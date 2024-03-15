export interface ITask {
  id: string;
  content: string;
  favorite: boolean;
  completed: boolean;
}
export interface TaskObject {
  task: ITaskColor[];
}

export interface ITaskColor extends ITask {
  color: string;
}
