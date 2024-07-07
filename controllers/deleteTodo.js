const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "todo updateddd",
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
