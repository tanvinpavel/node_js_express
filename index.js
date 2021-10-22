const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json())


const users = [
  {
    id: 0,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 1,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 2,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 3,
    name: "Ervin Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
];

//get method with query
app.get("/users", (req, res) => {
    const searchKeyword = req.query.search;

    if(searchKeyword){
        const searchValue = users.filter(user => user.name.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase()));

        res.send(searchValue);
    }else{
        res.send(users);
    }
});

//post method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    console.log(newUser)
    users.push(newUser);
    console.log("post on action", req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

//dynamic api
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

//listener
app.listen(port, () => {
  console.log("listening to port", port);
});
