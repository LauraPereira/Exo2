const express = require('express');
var mysql = require('mysql2');
const app = express();
 
var conn = mysql.createConnection({
  database: 'test',
  host: "db",
  user: "root",
  password: "root"
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



app.get('/', function (req, res) {
  conn.query('SELECT * FROM `user`;', function(err, rows, fields) {
    if (err) throw err;
      for (var i = 0; i < rows.length; i++) {
        result = rows; //je stock le résultat dans une variable pour l'envoyer à la vue
        
      };
      res.json(result);
  });  
});

app.get('/user/:id', function (req, res){
  var id =req.params.id;
  console.log(id);
  conn.query("SELECT * FROM user WHERE id="+req.params.id, function(err, rows, fields) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
      result = rows; //je stock le résultat dans une variable pour l'envoyer à la vue
      
    };
    res.json(result);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});