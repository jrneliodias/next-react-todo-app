import { getAllTodos } from "@/app/apis/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";




export default async function Home() {
  const tasks = await getAllTodos();




  return (
    <main className="max-w-4xl my-5 mx-auto">
      <div className="flex w-full flex-col gap-3 justify-center">
        <h1 className="text-center text-4xl justify-center font-bold">TO DO LIST</h1>
        <AddTask />
        <TodoList tasks={tasks.task} />
      </div>

    </main>
  );
}
