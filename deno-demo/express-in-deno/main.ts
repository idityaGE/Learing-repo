// to add npm package to deno project, you can use the following command:
/*
*  deno add npm:express 
*/

import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Deno!");
});

app.listen({ port: 3000 });


// to run use the following command:
/*
*  deno run --allow-all --watch main.ts
*/