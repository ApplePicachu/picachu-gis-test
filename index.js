const Express = require('express');
const fs = require('fs');

//Express init.
const app = Express();
// app.get('/', (req, res) =>{
//     res.sendfile('./index.html');
// });
app.get('/power',(req, res)=>{
    res.send((350+ Math.round(10 * Math.random())).toString());
})
app.use('/', Express.static('views'));
app.listen(process.env.PORT || 8080);