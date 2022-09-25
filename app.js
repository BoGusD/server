// @ts-check

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 4000;

const app = express();
const indexRouter = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', (req, res) => {
  res.send('dsdf');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500);
  res.end(err.message);
});
app.listen(PORT, () => {
  console.log(`이 서버는 ${PORT}입니다.`);
});
