const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://jaysonsanon:dGnO1Wzsz4Hr6SoP@starwars.exifv.mongodb.net/?retryWrites=true&w=majority&appName=starwars';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'cubegame',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    pass: String,
  });
  
  const User = mongoose.model('users', UserSchema);
  
module.exports = { User };