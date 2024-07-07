// import model
const Todo = require("../models/todo");

// define the route handler
exports.createTodo = async (req, res) => {
  try {
    // extract title and desc from request body
    const { title, desc } = req.body;

    // creating a new todo objecct and insert in the DB
    const response = await Todo.create({ title, desc });

    // send a json response with a success flag
    res.status(200).json({
      succuss: true,
      data: response,
      message: "entry created successfull",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      succuss: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
