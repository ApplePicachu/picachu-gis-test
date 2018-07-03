const Express = require('express');
const fs = require('fs');

//Express init.
const app = Express();
app.get('/', (req, res) =>{
    res.send('hello world');
});
app.use('/views', Express.static('views'));
app.listen(process.env.PORT || 8080);