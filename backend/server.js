const express = require('express');
const models = require('./database');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
// app.get('/', (req, res) => {
//   return res
//     .status(200)
//     .sendFile(path.join(__dirname, '../frontend/main.html'));
// });

app.get('/api/get', async (req, res) => {
  try {
    const people = await models.User.find({}).exec();
    console.log(people)
    return res.status(200).json(people);
  } catch (err) {
    console.error('Error getting people:', err);
  }
});

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log('on the port 3000');
}); //listens on port 3000 -> http://localhost:3000/
