import { ITaskColor, TaskObject } from "../../../types/tasks";
import prisma from "../../../lib/db";

let baseUrl = process.env.NEXT_PUBLIC_MY_APP_URL;

if (process.env.NODE_ENV === "development") {
  // Code to execute when running in a development environment
  baseUrl = process.env.NEXT_PUBLIC_MY_APP_LOCAL;
}

export const getAllTodos = async (): Promise<TaskObject> => {
  const res = await fetch(`${baseUrl}/apis/get-task`, { method: "GET", cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: ITaskColor): Promise<ITaskColor> => {
  const res = await fetch(`${baseUrl}/apis/add-task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITaskColor): Promise<ITaskColor> => {
  const res = await fetch(`${baseUrl}/apis/update-task`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updateTodo = await res.json();
  return updateTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/apis/delete-task`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
};
