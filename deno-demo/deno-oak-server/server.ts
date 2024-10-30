// deno-lint-ignore-file
import { Application, Router, Context } from "https://deno.land/x/oak@v12.5.0/mod.ts";

const router = new Router();

router.get("/", (context: Context) => {
  context.response.body = "Hello, Deno!";
});

// 1. Basic route to fetch data from an external API
router.get("/api/data", async (context: Context) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    context.response.body = { success: true, data };
  } catch (error) {
    context.response.status = 500;
    context.response.body = { success: false, message: "Failed to fetch data" };
  }
});

// 2. Route with a path parameter (`/api/posts/:id`)
router.get("/api/posts/:id", async (context: Context) => {
  //@ts-ignore
  const { id } = context.params;
  if (id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await response.json();
      context.response.body = { success: true, post };
    } catch (error) {
      context.response.status = 500;
      context.response.body = { success: false, message: "Failed to fetch post" };
    }
  } else {
    context.response.status = 400;
    context.response.body = { success: false, message: "Post ID is required" };
  }
});

// 3. Route with query parameters (`/api/search?title=example`)
router.get("/api/search", async (context: Context) => {
  const url = new URL(context.request.url);
  const title = url.searchParams.get("title");

  if (title) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${title}`);
      const results = await response.json();
      context.response.body = { success: true, results };
    } catch (error) {
      context.response.status = 500;
      context.response.body = { success: false, message: "Failed to search posts" };
    }
  } else {
    context.response.status = 400;
    context.response.body = { success: false, message: "Query parameter 'title' is required" };
  }
});

// 4. Route to handle POST requests with JSON body
router.post("/api/create", async (context: Context) => {
  try {
    const body = context.request.body();
    const value = await body.value;
    if (value.title && value.content) {
      context.response.status = 201;
      context.response.body = { success: true, message: "Post created", post: value };
    } else {
      context.response.status = 400;
      context.response.body = { success: false, message: "Title and content are required" };
    }
  } catch (error) {
    context.response.status = 500;
    context.response.body = { success: false, message: "Failed to create post" };
  }
});

// 5. Route to read custom headers
router.get("/api/headers", (context: Context) => {
  const customHeader = context.request.headers.get("x-custom-header");
  if (customHeader) {
    context.response.body = { success: true, customHeader };
  } else {
    context.response.status = 400;
    context.response.body = { success: false, message: "Custom header 'x-custom-header' is missing" };
  }
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
