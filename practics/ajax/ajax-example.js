var fs = require('fs');
var dummyjson = require('dummy-json');
var Handlebars = require("handlebars");
var jstoxml = require("jstoxml");
var express = require("express");

var faker = require("faker");

Handlebars.registerHelper('faker', function (options) {
  var fakerMethod = faker;
  var i;
  var path = options.split(".");
  for (i=0; i < path.length ;i += 1) {
    fakerMethod= fakerMethod[path[i]];
  }

  return fakerMethod();
});

Handlebars.registerHelper('repeater', function (argums, scope) {
  var iterationCount = parseInt(argums, 10);
  var result=[];
  var i;

  for (i=0; i <= iterationCount ;i+=1) {
    result.push(scope.fn());
  };

  return result.join(",");
});


var dataTemplate = fs.readFileSync(__dirname + '/database.hbs', {encoding: 'utf8'});
var htmlTemplate = Handlebars.compile(fs.readFileSync(__dirname + '/html-template.hbs', {encoding: 'utf8'}));

var data = JSON.parse(Handlebars.compile(dataTemplate)());

var app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  fs.readFile(__dirname + "/public/index.html", {encoding: 'utf8'}, function (err, file) {
    res.set('Content-Type', 'text/html');
    res.send(file);
  });
});

app.get('/users.json', function (req, res) {
  var from = parseInt(req.query.from, 10) || 0;
  var to = parseInt(req.query.to, 10) || 10;
  var result = {users: data.slice(from, to)};
  res.send(result);
});

app.get('/users.xml', function (req, res) {
  var from = parseInt(req.query.from, 10) || 0;
  var to = parseInt(req.query.to, 10) || 10;

  var resultData = {users: data.slice(from, to).map(function (user) {
    return {user : user};
  })};

  var result = '<?xml version="1.0" encoding="UTF-8"?>\n';
  result += jstoxml.toXML(resultData);

  res.set('Content-Type', 'text/xml');
  res.send(result);
});

app.get('/users.html', function (req, res) {
  var from = parseInt(req.query.from, 10) || 0;
  var to = parseInt(req.query.to, 10) || 10;

  var resultData = {users: data.slice(from, to)};

  var result = {users: data.slice(from, to)};

  res.set('Content-Type', 'text/html');

  res.send(htmlTemplate(result));
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

})
