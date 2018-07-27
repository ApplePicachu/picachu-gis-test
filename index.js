const Express = require('express');
const fs = require('fs');

//Express init.
const app = Express();
app.get('/', (req, res) =>{
    res.send('hello world');
});
app.get('/power',(req, res)=>{
    res.send(350+ Math.round(10 * Math.random()));
})
app.use('/views', Express.static('views'));
app.listen(process.env.PORT || 8080);