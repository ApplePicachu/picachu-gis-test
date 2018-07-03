const Express = require('express');
//Express init.
const app = Express();
app.get('/', (res, req) =>{
    res.send('hello world');
});
app.listen(process.env.PORT || 8080);