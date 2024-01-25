import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";


export default function Home() {
  return (
    <main className="max-w-4xl m-5 mx-auto">
      <div className="flex w-full flex-col gap-3 justify-center">
      <h1 className="text-center text-3xl justify-center"> TO DO LIST</h1>
      <AddTask/>
      <TodoList/>
      </div>

    </main>
  );
}
