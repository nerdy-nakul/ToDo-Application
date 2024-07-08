const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, desc } = req.body;

    // creating a new todo objecct and insert in the DB
    const response = await Todo.create({
      userId: req.userWithToken.id,
      title,
      desc,
    });

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
