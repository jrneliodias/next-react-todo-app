export interface ITask {
    id: string,
    content: string,
    favorite:boolean,
  
}
export interface TaskObject {
    task:ITaskColor[]
}

export interface ITaskColor extends ITask {
    color: string
}