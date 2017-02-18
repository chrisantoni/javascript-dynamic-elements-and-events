var mongoose = require('mongoose')
var Schema = mongoose.Schema

var todoSchema = new Schema({
  taskID:Number,
  task:String,
  status:Boolean
},{
  timestamps : true
})
var Todo = mongoose.model('Todo',todoSchema)

module.exports = Todo
