var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: String,
    category: String,
    content: String
  },
  {
    timestamp:true
  }
)

module.exports = mongoose.model('Post', PostSchema);
