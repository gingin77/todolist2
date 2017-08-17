const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');

let todos = ["Research pet insurance", "Take dog to vet"]
let new_todos = "";
let completed = ["paid tuition for TIY"]




app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));



app.get("/todo2/", function (req, res) {
  res.render('todo2', { todos: todos, completed: completed });
});


app.post("/todo2/", function (req, res) {
  todos.push(req.body.new_todos);
  // completed.push(req.body.new_todos)
  // let popped = todos.pop();
  // completed.push(popped);
  // console.log(popped);
  console.log(todos);
  res.redirect('/todo2/');
})

app.post("/todo2/", function (req, res) {
  completed.push(req.body.marked_as_complete)
  // let popped = todos.pop();
  // completed.push(popped);
  // console.log(popped);
  console.log(completed);
  res.redirect('/todo2/');
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
