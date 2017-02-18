var Todo = require('../model/todo')

module.exports = {
  get_all_task : function(req, res) {
    Todo.find({}, function(err,data){
    if(err)throw err
    res.send(data)
    })
  },
  create_task : function(req, res, next) {
    var newTask = new Todo({
      taskID    : req.body.taskID,
      task      : req.body.task,
      status    : false,
      createdAt : new Date(),
      updatedAt : new Date()
    })
    newTask.save(function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  update_task : function(req, res, next) {
    Todo.findOneAndUpdate(
      {
        taskID: req.body.taskID
      },
      // update
      {
        $set: {
          status:true
        }
      }
    ,{new:true},
    // callback
    function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  delete_task : function(req,res){
    var input_taskID = req.body.taskID
    Todo.findOneAndRemove({taskID:input_taskID},function(err,data){
      if(err)throw err
      console.log(data);
      res.send(data)
    })
  }
}
