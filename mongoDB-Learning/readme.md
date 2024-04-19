# mongoDB learning notes
``Created by: Aditya``

[docs]: https://docs.mongodb.com/manual/

for more information, visit the official documentation:[Documentation][docs]

### Mongo shell

1. first add the path to the mongo shell to the system path
2. open the terminal and type `mongosh` to start the mongo shell
3. type `show dbs` to show all the databases
4. type `use <database_name>` to switch to a database or create a new one if it doesn't exist
5. you can also use some javascript commands to interact with the database
6. type `exit` to exit the mongo shell

> ### BSON (Binary JSON)

1. BSON is a binary representation of JSON-like documents
2. It is a data format used by MongoDB to store documents
3. It is a binary-encoded serialization of JSON-like documents
4. It is a lightweight, traversable, and efficient format for storing and accessing data
5. BSON supports various data types such as strings, integers, arrays, and objects
6. for more information, visit the official documentation: https://docs.mongodb.com/manual/reference/bson-types/

> ### collection and documents
>
> > #### Documents

1. A document is a set of key-value pairs

```json
{
  "name": "John Doe",
  "age": 30,
  "email": "adiimaurya02@gmail.com"
}
```

2. It is the basic unit of data in MongoDB
3. Documents are stored in collections

> > #### Collections

1. A collection is a group of documents
2. Collections are analogous to tables in relational databases
3. Collections do not enforce a schema
4. Collections are created automatically when you insert documents into them
5. Collections are used to store related documents
6. Collections are stored in databases
7. To see all the collections in a database, you can use the `show collections` command
8. To create a collection, you can use the `createCollection()` method

```javascript
db.createCollection("users");
```

<hr>

## CRUD operations

##### _`camelCase` is used in the mongo shell_

### Create

1. To insert a single document into a collection, you can use the `insertOne()` method

```javascript
db.collection.insertOne({name: "John Doe", age: 30, email: "})
```

2. To insert multiple documents into a collection, you can use the `insertMany()` method and pass an `array` of documents

```javascript
db.collection.insertMany([
  {name: "John Doe", age: 30, email: "@"}
  {name: "Jane Doe", age: 25, email: "@"}
])
```

3. To insert a document into a collection, you can use the `insert()` method

```javascript
db.collection.insert({name: "John Doe", age: 30, email: "})
```

4. mongoDB automatically creates a collection when you insert a document into it if it doesn't exist
   `db.<collection_name>.insertOne(<data>)`

5. mongoDB automatically creates a database when you insert a document into it if it doesn't exist
   `db.<database_name>.<collection_name>.insertOne(<data>)`

6. mongoDB automatically generates an `_id` field for each document you insert into a collection and it it's primary key

```json
{
  "_id": ObjectId("60b9e4f3d4b3f3b3b3b3b3b3"),
  "name": "John Doe",
  "age": 30,
  "email": ",
  "__v":0 // version key
}
```

### Read

1. To show all documents in a collection, you can use the `find()` method

```javascript
db.collection.find();
```

2. To query documents in a collection, you can use the `find()` method with a query filter and only documents that match the query filter will be returned
   This will return all documents in the collection where the `city` field is equal to `Delhi` in form of a `cursor` and `array` of documents
   ##### _`cursor` is a pointer to the result set of a query, its an refrence to the original document_

```javascript
db.collection.find({ city: "Delhi" });
```

3. To query a single document in a collection, you can use the `findOne()` method
   This will return the first document in the collection where the `name` field is equal to `John Doe`
   ##### _`findOne()` method returns the actual document that matches the query filter_

```javascript
db.collection.findOne({ name: "John Doe" });
```

#### Query operators

for more information, visit the official documentation: [Query operators](https://docs.mongodb.com/manual/reference/operator/query/)

1. To query documents in a collection using comparison operators, you can use the following operators

```javascript
db.collection.find({ age: { $gt: 30 } }); // greater than
db.collection.find({ age: { $lt: 30 } }); // less than
db.collection.find({ age: { $gte: 30 } }); // greater than or equal to
db.collection.find({ age: { $lte: 30 } }); // less than or equal to
db.collection.find({ age: { $eq: 30 } }); // equal to
db.collection.find({ age: { $ne: 30 } }); // not equal to
```

2. To query documents in a collection using logical operators, you can use the following operators

```javascript
db.collection.find({ $and: [{ age: 30 }, { city: "Delhi" }] }); // logical AND
db.collection.find({ $or: [{ age: 30 }, { city: "Delhi" }] }); // logical OR
db.collection.find({ $not: { age: 30 } }); // logical NOT
```

3. To query documents in a collection using element operators, you can use the following operators

```javascript
db.collection.find({ city: { $exists: true } }); // checks if the field exists
db.collection.find({ city: { $type: "string" } }); // checks the type of the field
```

4. To query documents in a collection using evaluation operators, you can use the following operators

```javascript
db.collection.find({ age: { $mod: [2, 0] } }); // checks if the field is divisible by the divisor
db.collection.find({ age: { $regex: "^J" } }); // checks if the field matches the regular expression
db.collection.find({ age: { $text: "John Doe" } }); // checks if the field contains the text
```

5. To query documents in a collection using array operators, you can use the following operators

```javascript
db.collection.find({ tags: { $all: ["mongodb", "database"] } }); // checks if all elements are present in the array
db.collection.find({ tags: { $elemMatch: { $eq: "mongodb" } } }); // checks if any element matches the query
db.collection.find({ tags: { $size: 2 } }); // checks the size of the array
```

### Update

#### Update operators syntax

for more information, visit the official documentation: [Update operators](https://docs.mongodb.com/manual/reference/operator/update/)

```
{
<update operator>: { <field1>: <value1>, ... },
<update operator>: { <field2>: <value2>, ... },
...
}
```

```json
{
  $set: {field: value}, // sets the value of a field
  $unset: {field: value}, // removes the field
  $addfields: {field: value} // adds new fields to a document
  $sort: {field: value} // sorts documents to include in the output
  $rename: {field: value}, // renames the field
  $replaceRoot: {field: value} // replaces the root document with a new document
  $addToSet: {field: value}, // adds an element to an array if it does not already exist
  $replaceWith: {field: value}, // replaces the input document with a new document
  $inc: {field: value}, // increments the value of a field
  $mul: {field: value}, // multiplies the value of a field
  $min: {field: value}, // sets the value of a field if it is less than the specified value
  $max: {field: value}, // sets the value of a field if it is greater than the specified value
  $currentDate: {field: value}, // sets the value of a field to the current date
  $pop: {field: value}, // removes the first or last element of an array
  $pull: {field: value}, // removes all elements that match the query
  $push: {field: value}, // adds an element to an array
  $pullAll: {field: value}, // removes all elements that match the query
  ...
}
```

**syntax: `db.collection.updateOne(<filter>,<update>)`**

1. To update a single document in a collection, you can use the `updateOne()` method

```javascript
db.collection.updateOne({ name: "John Doe" }, { $set: { age: 35 } });
```

2. To update multiple documents in a collection, you can use the `updateMany()` method

```javascript
db.collection.updateMany({ city: "Delhi" }, { $set: { city: "New Delhi" } });
```

3. To update a single document in a collection, you can use the `update()` method and difference between `update()` and `updateOne()` is that `update()` method can update multiple documents

```javascript
db.collection.update({ name: "John Doe" }, { $set: { age: 35 } });
```

4. To replace a single document in a collection, you can use the `replaceOne()` method and pass the new document (all document fields will be replaced except the `_id` field)

```javascript
db.collection.replaceOne({ name: "John Doe" }, { name: "Jane Doe", age: 25 });
```

### Delete

1. To delete a single document in a collection, you can use the `deleteOne()` method

```javascript
db.collection.deleteOne({ name: "John Doe" });
```

2. To delete multiple documents in a collection, you can use the `deleteMany()` method

```javascript
db.collection.deleteMany({ marks: { $lt: 75 } });
```
3. To delete a single document in a collection, you can use the `remove()` method

```javascript
db.collection.remove({ name: "John Doe" });
```
4. To delete all documents in a collection, you can use the `remove()` method without any query filter

```javascript
db.collection.remove({});
```
```javascript
db.collection.deleteMany({});
```

#### Drop

To drop a collection or database, you can use the `drop()` method

```javascript
db.collection.drop(); // drops the current collection
db.dropDatabase(); // drops the current database
``` 


<hr>

## Nested documents

**example:**

```json
{
  "name": "Aditya",
  "age": 18,
  "email": "@",
  "isMale": true,
  "address": {
    "city": "Mau",
    "state": "UP",
    "country": "India"
  }
}
```

**syntax to find:** `db.collection.find({ "address.city": "Mau" })`

> field should be enclosed in double quotes if it contains a dot

<hr>

## Array of documents

**example:**

```json
{
  "name": "Aditya",
  "age": 18,
  "email": "@",
  "isMale": true,
  "languages": ["Hindi", "English", "Spanish"]
}
```

**syntax to find:** `db.collection.find({ languages: "Hindi" })`

<hr>

# Advanced queries

## Indexes

1. Indexes are used to improve the performance of queries
2. Indexes are created on fields in a collection
3. Indexes are stored in a special data structure called a B-tree

**syntax to create an index:** `db.collection.createIndex({ field: 1 })`

1. To create a single-field index in a collection, you can use the `createIndex()` method

```javascript
db.collection.createIndex({ name: 1 });
```

2. To create a compound index in a collection, you can use the `createIndex()` method and pass an object with multiple fields

```javascript
db.collection.createIndex({ name: 1, age: -1 });
```

3. To create a unique index in a collection, you can use the `createIndex()` method and pass an object with the `unique` option set to `true`

```javascript
db.collection.createIndex({ email: 1 }, { unique: true });
```

4. To create a text index in a collection, you can use the `createIndex()` method and pass an object with the `text` option set to `true`

```javascript
db.collection.createIndex({ name: "text" });
```
