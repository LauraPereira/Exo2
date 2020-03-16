const express = require('express');
var mysql = require('mysql2');
const app = express();
var bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({extend :true}));

var conn = mysql.createConnection({
  database: 'todos',
  host: "db",
  user: "root",
  password: "root"
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


/*app.get('/todos/:id', function (req, res){
  var id =req.params.id;
  conn.query("SELECT * FROM todos WHERE id="+req.params.id, function(err, rows, fields) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
      result = rows; //je stock le résultat dans une variable pour l'envoyer à la vue
      
    };
    res.json(result);
  });
});*/

/*app.post('/todos', function (req, res) {
  let label = req.body.label;
  let isdone = req.body.isdone;
  conn.query("INSERT INTO todos(label, isdone) VALUES (?,?);",[label, isdone], function (err, fields) {
    if (err) throw err;
    console.log("1 enregistrement effectué.")
  });
});*/

app.put('/todos/:id', function (req, res) {
  lab:req.body.label

  conn.query("UPDATE todos SET label=? WHERE id="+req.params.id, [label], function (err, fields) {
    if (err) throw err;
    console.log("1 enregistrement effectué.")
  });
});

/*app.delete('/todos/:id', function (req, res) {
  
  conn.query("DELETE FROM todos WHERE id="+req.params.id, function (err, fields) {
    if (err) throw err;
    console.log("1 enregistrement effectué.")
  });
});*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});