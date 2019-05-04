require('newrelic');
const express = require('express');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.get('*.gz', (req, res, next) => {
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
 });


const staticPath = `${__dirname}/../public`;
app.use('/books/:id', express.static(staticPath));

// LOADER IO
app.get('/loaderio-fbeab14fae82bdaa3cfc2d1dbad83c59', (req, res) => {
  res.send('loaderio-fbeab14fae82bdaa3cfc2d1dbad83c59');
  res.end();
});

app.use(
  '/books/:id/details',
  proxy({ target: 'http://ec2-18-191-160-157.us-east-2.compute.amazonaws.com:3001', changeOrigin: true }),
);

// hannah-service
app.use(
  '/books/:id/reviews',
  proxy({ target: 'http://ec2-18-224-40-87.us-east-2.compute.amazonaws.com:3003', changeOrigin: true }),
);

// kaz-service
app.use(
  '/books/:id/info',
  proxy({ target: 'http://localhost:3002', changeOrigin: true }),
);

// ginger-service
app.use(
  '/books/:id/authors',
  proxy({ target: 'http://ec2-13-59-83-138.us-east-2.compute.amazonaws.com:9000', changeOrigin: true }),
);

module.exports = app;
