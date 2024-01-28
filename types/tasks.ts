export interface ITask {
    id: string,
    content: string,
    favorite:boolean,
    color?: string
}
export interface TaskObject {
    task:ITask[]
}