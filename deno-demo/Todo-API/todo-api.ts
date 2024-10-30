const PORT = 3000;

type TODO = {
  id: string;
  title: string;
  completed: boolean;
}

const todos: TODO[] = [
  { id: '1', title: 'Learn TypeScript', completed: false },
  { id: '2', title: 'Learn React', completed: false },
  { id: '3', title: 'Build a project', completed: false },
];



async function handleRequest(res: Request): Promise<Response> {
  const url = new URL(res.url);
  const path = url.pathname;

  if (path === '/todos' && res.method === 'GET') {
    return new Response(JSON.stringify(todos), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
  if (path === '/todos' && res.method === 'POST') {
    //TODO: My browser is able to hit this endpoint, but not with hoppscotch. I'm not sure why.
    const { title } = await res.json();
    console.log(title)
    const newTodo = { id: String(todos.length + 1), title, completed: false };
    todos.push(newTodo);
    return new Response(JSON.stringify(newTodo), { status: 201, headers: { 'Content-Type': 'application/json' } });
  }

  return new Response("Not found", { status: 404 });
}

console.log("Server is running on http://localhost:" + PORT);
Deno.serve({ port: PORT }, handleRequest);