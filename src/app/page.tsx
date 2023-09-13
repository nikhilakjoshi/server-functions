import { revalidatePath } from "next/cache";
const getTodos = async () => {
  const r = await fetch("http://localhost:3001/todo");
  return (await r.json()) as Promise<Array<{ id: number; title: string }>>;
};

export default async function Home() {
  const todos = await getTodos();

  async function addTodo(params: FormData) {
    "use server";
    const todo = params.get("todo") as string;
    const payload = { title: todo };
    await fetch("http://localhost:3001/todo", {
      method: "POST",
      body: JSON.stringify({ ...payload }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("=========================================");
    console.log("=== This is now running on the server====");
    console.log("=========================================");
    revalidatePath("/");
  }

  return (
    <div className="max-w-2xl m-5 rounded shadow border overflow-hidden">
      <div className="text-3xl bg-blue-600 text-white font-bold p-5">
        React Server Functions
      </div>
      <div className="p-5">
        <p className="text-lg text-gray-600">
          This is a demo of React Server Functions with Next.js.
        </p>
        <form action={addTodo}>
          <input
            type="text"
            name="todo"
            required
            className="border p-2 rounded mt-6"
          />
          <input
            type="submit"
            value="Add"
            className="block mt-3 bg-green-900 text-white font-bold px-4 py-2 rounded"
          />
        </form>
        <div className="border mt-6 mb-10 rounded p-3">
          <h5 className="text-lg text-blue-600 underline">Todo List</h5>
          <ol>
            {todos.map((todo, i) => (
              <li key={`todo-${i}`} className="my-2 list-decimal list-inside">
                {todo.title}
              </li>
            ))}
          </ol>
        </div>
        <noscript className="text-amber-900 text-sm mt-5">
          Javascript has been disabled in your browser.
        </noscript>
      </div>
    </div>
  );
}
