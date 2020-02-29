var express = require('express');
var app = express();
app.set('view engine', 'jade');

app.route('/Node').get((req,res) =>{
res.send('You\'ve navigated to the Node -page');
});

app.get('/', (req, res) => {
    res.render('index', {title:'JNode', message:'Welcome'});
    
});

var server = app.listen(3000, {});
