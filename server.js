const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//serve static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/templates'));

//include routes
var routes = require('./routes/router');

//include routes
var routes = require('./routes/router');
app.use('/', routes);

//catch 404 and forward to error handlers
app.use(function(req, res) {
    var err = new Error('file not found');
    err.status = 404;
    next(err);
});

//error handler
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(3001, () => {
    console.log('Express app listening on port 3001');
});