var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.post('/posts', function(req, res){
  console.log(req.body);
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
