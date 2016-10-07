var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/demo-mongoose-save-data');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("we are success!");
});

var PostSchema = new Schema(
  {
    title: String,
    content: String
  }
);

var Post = mongoose.model('posts', PostSchema);

var post = new Post({title:"myTitle", content: "myConent"})

var post = new Post({ name: 'post' });

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
