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

async function createTodo(){
  const newTodo = {
    name: "Do Mongoose Homework",
    isComplete: true
  }

  const createdTodo = await Todo.create(newTodo)

  console.log("created new todo: ", createdTodo)
}

async function getAllTodos(){


  const allTodos = await Todo.find({isComplete:false})
  console.log("All Todos", allTodos)
}

async function getOneTodo(){
  const foundTodo = await Todo.findOne({name:"Do Mongoose Homework 3"})
  console.log("found todo:",foundTodo)
}

async function getTodoById(){
  const foundTodo = await Todo.findById("6772c0b65d7595bbef9b198d")
  console.log("found todo:",foundTodo)

}

async function updateOneTodo(){

  const updatedTodo = await Todo.findByIdAndUpdate("6772c0b65d7595bbef9b198d",{name:"Learn APIS"},{new:true})

  console.log(updatedTodo)
}

async function updateOneTodo2(){

  const updatedTodo = await Todo.updateOne({name:"Learn APIS"},{name:"Changed with UpdateOne"})
  console.log(updatedTodo)
}

async function updateManyTodos(){

  const updatedTodo = await Todo.updateMany({isComplete:true},{name:"Changed with UpdateMany"})
  console.log(updatedTodo)
}

const runQueries = async () => {
  console.log('Queries running.')
  // The functions calls to run queries in our db will go here as we write them.

  // await createTodo()
  // await getAllTodos()
  // await getOneTodo()
  // await getTodoById()
  // await updateOneTodo()
  // await updateOneTodo2()
  await updateManyTodos()

  
};

connect()
/*------------------------------ Query Functions -----------------------------*/
