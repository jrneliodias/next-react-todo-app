import { getALlTodos } from "@/apis/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";


export default async function Home() {
  const tasks = await getALlTodos();


  return (
    <main className="max-w-4xl m-5">
      <div className="flex w-full flex-col gap-3 justify-center">
      <h1 className="text-center text-3xl justify-center font-bold">TO DO LIST</h1>
      <AddTask/>
      <TodoList tasks = {tasks}/>
      </div>

    </main>
  );
}
