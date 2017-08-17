const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');

let todos = ["Research pet insurance", "Take dog to vet"]
let new_todos = "";

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator);


app.get("/todo2/", function (req, res) {
  res.render('todo2', { todos: todos });
});


app.post("/todo2/", function (req, res) {
  todos.push(req.body.new_todos);
  // res.send('todo2', { todos: new_todos });
  console.log(todos)
  res.redirect('/todo2/');
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
