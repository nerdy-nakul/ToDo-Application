const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, desc, updateAt: Date.now() },
      { new: true }
    );

    res.cookie("neww", todo).status(200).json({
      success: true,
      data: todo,
      message: `todo data updated in the DB`,
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
