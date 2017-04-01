var express = require('express');

var app = express();
var url = require('url');
var mod = require('./module');

//make principal page: 
app.use(express.static('public'));
//app.use(express.static('public/css'));

app.get("/:time", function(req, res) { //we ask app to get the thing after "/:" accessing to it as an object
    //var strUrl = req.url; //también se puede: req.originalUrl
    //console.log(req.originalUrl);
    //var reqUrl = url.parse(strUrl, true);
    //console.log(reqUrl);
    //console.log(req.params);
    //its better to use "req.params.<thing>" because its more what we are expecting (just value, without "/" before as per url functionality)
    var timeStr = req.params.time;
    var dateObj = mod.analyseTime(timeStr);
    res.json(dateObj);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});