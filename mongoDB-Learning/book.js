import mongoose from 'mongoose';

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main()
    .then(res => console.log("Connected to db"))
    .catch(err => console.log(err));

//SchemaType and options
//https://mongoosejs.com/docs/schematypes.html
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        toLowerCase: true, //converts the string to lower case
        required: true, //same as not null
        maxLength: 50 //same as varchar(50)
    },
    author: {
        type: String,
        imutable: true //same as not updatable
    },
    price: {
        type: Number, //if we pass string it will convert it to number if its castable to number else it will throw an error 'CastError'. "123" --> 123 , "abc" --> error 
        min: [1, 'Price should be greater than 1'], //custom error message
    },
    discount: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        default: '',
        enum: ['fiction', 'non-fiction', 'comedy', 'horror', ''] //only these values are allowed
    },
    tags: {
        type: [String], //array of strings
        default: []
    },
})

const Book = mongoose.model("Book", bookSchema);

// const book = new Book({
//     title: "Marvel Avengers vol 2",
//     author: "Stan Lee",
//     price: 879,
//     tags: ['superhero', 'action', 'adventure'],
// })
// book.save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



Book.findOneAndUpdate({ title: "the alchemist" }, { price: -700 }, { new: true , runValidators: true})
.then(res => console.log(res))
.catch(err => console.log(err.errors.price.message))





//if we pass some extra field in the object which is not defined in schema then that field will be ignored by the mongoose

//when we update the document then the schema validation is not applied by default to apply the validation we have to pass an option {runValidators: true} to the update function

//to get new update document we have to pass an option {new: true} to the update function