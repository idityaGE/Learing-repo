import mongoose from 'mongoose';
import Chat from './models/chat.js';

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatever');
}

main()
    .then(res => console.log("connection successful"))
    .catch(err => console.log(err));


const sampleData = [
    {
        msg: "Hello",
        from: "Alice",
        to: "Bob"
    },
    {
        msg: "Hi",
        from: "Bob",
        to: "Alice"
    },
    {
        msg: "How are you?",
        from: "Alice",
        to: "Bob"
    },
    {
        msg: "I'm good, thanks!",
        from: "Bob",
        to: "Alice"
    }
];

Chat.insertMany(sampleData)
    .then(res => console.log(res))
    .catch(err => console.log(err))