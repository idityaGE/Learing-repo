import mongoose from 'mongoose';

//create connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Execute connection
main()
    .then(res => console.log("Connected to db"))
    .catch(err => console.log(err));


const { Schema } = mongoose;

//Create schema
const userSchema = new Schema({
    name: String,
    email: String,
    age: Number
});

//Create model
const User = mongoose.model("User", userSchema);
//models name           //collection name
//collection name changes from  User --> users

// //To create new Document
// const user2 = new User({
//     name: "Mohit",
//     email: "mohit@gmail.com",
//     age: 17
// })
// //To save in dbs and this function is also an asynchronus function which returns a promise
// user2.save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// //To insert many 
// User.insertMany([{
//     name: "Tony",
//     email: "tony@gmail.com",
//     age: 50
// }, {
//     name: "Tony",
//     email: "tony@gmail.com",
//     age: 50
// }, {
//     name: "Tony",
//     email: "tony@gmail.com",
//     age: 50
// }]).then(res => console.log(res))

//Mongooes use Operation Buffering
//Mongooes lets you perform operations on the database without actually sending the operations to the database.


// //To find all the documents
// User.find() //returns a query object (not a promise)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// //*Mongooes queary is not a promise but it has then and catch method

// //To find one document
// User.findOne({ name: "Tony" })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// //To find by id
// User.findById("660063491c85974896ddba70")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// //To find using query
// User.find({age: {$lt: 18}})
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// To updateOne
// User.updateOne({name: "Tony"}, {name: "Tony Stark"})
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// //To updateMany
// User.updateMany({ age: { $gt: 45 } }, { name: "Tony Stark" })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// // To findByIdAndUpdate
// first find and then update this will return the document before updating to get the updated document we have to pass {new: true}
// User.findByIdAndUpdate("660063491c85974896ddba70", { name: "Bruce" })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// // To findOneAndUpdate
// User.findOneAndUpdate({ name: "Aditya" }, { email: "adiimaurya@gmail.com" }, { new: true })
// // here it will print the document after updating
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// // //To deleteOne
// User.deleteOne({ name: "Captain" })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// // //To deleteMany
// User.deleteMany({ age: { $gt: 45 } })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// // //To findByIdAndDelete
// User.findByIdAndDelete("660063491c85974896ddba70")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// // //To deleteOne
// User.findOneAndDelete({ name: "Captain" })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

