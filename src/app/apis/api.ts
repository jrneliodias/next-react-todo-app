import { ITask, ITaskColor, TaskObject } from "../../../types/tasks";
import prisma from "../../../lib/db";

const baseUrl = "https://todo-list-app-nelio.vercel.app";

export const getAllTodos = async (): Promise<TaskObject> => {
  const res = await fetch(`${baseUrl}/apis/task`, { method: "GET", cache: "no-store" });
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
  const res = await fetch(`${baseUrl}/apis/task`, {
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
  await fetch(`${baseUrl}/apis/task`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
};

export async function getAllTasks() {
  const tasks = await prisma.task.findMany();
  return tasks;
}
