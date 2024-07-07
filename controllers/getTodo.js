const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    // fetch all todos data items from the data base
    const todos = await Todo.find({});

    // sending response with success flag
    res.status(200).json({
      success: true,
      data: todos,
      message: "entire todo data is fetched",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "server error",
      message: error.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // fteching todo with the id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // if data found
    res.status(200).json({
      success: true,
      data: todo,
      message: "fetched todo data by id",
    });

    // in data not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: `no data found with given ID`,
      });
    }
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "server error",
      message: error.message,
    });
  }
};
