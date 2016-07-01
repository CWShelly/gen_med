const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));

app.listen((app.get('port')), ()=>{
    console.log('up on ', app.get('port'));
});
