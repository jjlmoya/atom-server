const Config = require('./config');
const port = Config.server().port;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});
require('./engine')(app);
require('./router')(app);

