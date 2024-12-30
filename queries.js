/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name:String,
  isComplete:Boolean
})

const Todo = mongoose.model('Todo',todoSchema)


async function connect(){
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.

  const newTodo = {
    name: "Do Mongoose Homework",
    isComplete: true
  }

  const createdTodo = await Todo.create(newTodo)

  console.log("created new todo: ", createdTodo)
};

connect()
/*------------------------------ Query Functions -----------------------------*/
