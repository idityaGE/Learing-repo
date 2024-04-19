import express from 'express';
import path from 'path';
import methodOverride from 'method-override';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import Chat from './models/chat.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatever');
}

main()
    .then(res => console.log("connection successful"))
    .catch(err => console.log(err));

// show all chats route
app.get("/chats", async (req, res) => {
    const chats = await Chat.find({});
    console.log(chats)
    res.render("index.ejs", { chats });
});

// new chat route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

// create new chat route
app.post("/chats", async (req, res) => {
    const { from, to, msg } = req.body;
    // const newChat = new Chat({ from, to, msg });
    // await newChat.save();
    await Chat.create({ from, to, msg });
    res.redirect("/chats");
})

// edit chat route
app.get("/chats/:id/edit", async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})

// update chat route
app.put("/chats/:id", async (req, res) => {
    const { id } = req.params;
    const { msg } = req.body;
    await Chat.findByIdAndUpdate(id, { msg }, { runValidators: true, new: true });
    res.redirect("/chats");
})

// delete chat route
app.delete("/chats/:id", async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

// show chat route

app.get("/", (req, res) => {
    res.send("Got to '/chats' to see all chats");
})
