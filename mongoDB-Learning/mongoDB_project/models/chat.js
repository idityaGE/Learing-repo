import mongooes from 'mongoose';


//Create schema
const chatSchema = new mongooes.Schema({
    msg: {
        type: String,
        required: true,
        maxLength: 50
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date(),
        required: true
    }
});

//Create model
const Chat = mongooes.model("Chat", chatSchema);

export default Chat;