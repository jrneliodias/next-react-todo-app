import { ITask } from "../../types/tasks";

const baseUrl = "http://localhost:3001";

export const getALlTodos = async ():Promise<ITask[]> => {

const res = await fetch(`${baseUrl}/tasks`);
const todos = await res.json()
return todos
};
