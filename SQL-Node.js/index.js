import { faker } from '@faker-js/faker';
// Get the client
import mysql from 'mysql2/promise';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';

// Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'first_db',
    password: '4491'
});

function createRandomUser() {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.password(),
        faker.internet.email()
    ];
}

// //using placeholder "?" to insert data
// let query = "INSERT INTO user (id, username, password, email) VALUES ?";
// let data = [];

// for (let i = 0; i < 100; i++) {
//     const user = createRandomUser();
//     data.push(user);
// }

// // inserting data to the database
// try {
//     const [results] = await connection.query(
//         query,
//         [data],
//     );
//     console.log(results);
// } catch (err) {
//     console.log(err);
// }

// // Close the connection
// connection.end();



const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


//home route
app.get("/", async (req, res) => {
    let query = "SELECT count(*) FROM user";
    try {
        const [results] = await connection.query(
            query,
        )
        res.render("home.ejs", { count: results[0]['count(*)'] });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

//users route
app.get("/users", async (req, res) => {
    let query = "SELECT * FROM user";
    try {
        const [users] = await connection.query(
            query
        )
        res.render("user.ejs", { users });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

//edit user route
app.get("/users/:id/edit", async (req, res) => {
    let { id } = req.params;
    let query = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        const [results] = await connection.query(
            query
        )
        let user = results[0];
        console.log(user)
        res.render("edit.ejs", { user });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

//update user route
app.patch("/users/:id", async (req, res) => {
    let { id } = req.params;
    let { username: formUserName, password: formPass, email: formEmail } = req.body;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        const [result] = await connection.query(
            q
        )
        let user = result[0];
        console.log(user);
        if (formPass !== user.password) {
            res.send("Wrong password entered! Go back! Please try again.");
        } else {
            let query = `UPDATE user SET username='${formUserName}' , email = '${formEmail}' WHERE id='${id}'`;
            try {
                const [results] = await connection.query(
                    query
                )
                console.log(results);
                res.redirect("/users");
            } catch (err) {
                console.log(err);
                res.send(err);
            }
        }
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
})

//add user route
app.get("/users/add", (req, res) => {
    res.render("add.ejs");
})

app.post("/users/add", async (req, res) => {
    let { username, password, email } = req.body;
    let query = `INSERT INTO user (id, username, password, email) VALUES ('${faker.string.uuid()}', '${username}', '${password}', '${email}')`;
    try {
        const [results] = await connection.query(
            query
        )
        console.log(results);
        res.redirect("/users");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})


//delete user route
app.get("/users/:id/delete", async (req, res) => {
    let { id } = req.params;
    let query = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        const [results] = await connection.query(
            query
        )
        let user = results[0];
        res.render("delete.ejs", { user });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

app.delete("/users/:id", async (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try {
        const [result] = await connection.query(
            q
        )
        let user = result[0];
        console.log(user);
        if (password !== user.password) {
            res.send("Wrong password entered! Go back! Please try again.");
        } else {
            let query = `DELETE FROM user WHERE id='${id}'`;
            try {
                const [results] = await connection.query(
                    query
                )
                console.log(results);
                res.redirect("/users");
            } catch (err) {
                console.log(err);
                res.send(err);
            }
        }
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
})
