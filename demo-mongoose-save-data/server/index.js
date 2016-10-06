var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/demo-mongoose-save-data');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("we are success!");
});

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('posts', kittySchema);

var silence = new Kitten({ name: 'tests' });
console.log(silence.name);

var post = new Kitten({ name: 'post' });

post.save(function(err){
  if(err) return console.log(err);
  console.log('saved!');
})

app.post('/posts', function(req, res){
  console.log(req.body);
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
