const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const limiter = require('./src/middlewares/ratelimit');
app.use(limiter);

const statusrouter = require('./src/routes/status.routes');
const factrouter = require('./src/routes/fact.routes');
const productrouter = require('./src/routes/product.routes');

app.use('/', statusrouter);
app.use('/api', factrouter);
app.use('/v2', productrouter);

module.exports = app;
