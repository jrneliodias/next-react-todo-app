import { ITask, ITaskColor, TaskObject } from "../../../types/tasks";

const baseUrl = "http://localhost:3000/apis";

export const getAllTodos = async (): Promise<TaskObject> => {
  const res = await fetch(`${baseUrl}/task`,{cache:'no-store'});
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: ITaskColor):Promise<ITaskColor> => {
  const res = await fetch(`${baseUrl}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITaskColor):Promise<ITaskColor> => {
  const res = await fetch(`${baseUrl}/task`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updateTodo = await res.json();
  return updateTodo;
};

export const deleteTodo = async (id: string):Promise<void> => {
  await fetch(`${baseUrl}/task`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id}),
  });
};

