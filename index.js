const app = require('./config/express');
mongoose = require('./config/mongoose');

port = process.env.PORT || 3000;

app.use(require("./shape/shape.route"));

app.listen( port );