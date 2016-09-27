
// res就是response

var express = require('express')
var app = express()

app.get('/:name', function (req, res) {  //路由
  var username = req.params.name
  var page = "<html>"+
              "<body>"+
              "<h1>" +
              username +"的购物车"+
              "</h1>"+
               "</body>"+
              "</html>"
  res.send(page)         //执行的代码
})
app.get('/about.html', function (req, res) {
  var page = "<html>"+
              "<body>"+
               "<h1> index.html</h1>"+
               "</body>"+
              "</html>"
  res.send(page)
})

app.listen(3000,function(){
  console.log("running on port 3000...please visit http://localhost:3000");
})
