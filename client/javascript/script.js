$.ajax({
    url: "http://localhost:3000/todo",
    method:"GET",
    success: function(result) {
      var status = ''
      var temp = ""
      for(var i=0;i<result.length;i++){
        if(result[i].status === false){
          status = '<img src="../images/undone.png" alt="Progress" height=25 width=25></img>'
        }else{
          status = '<img src="../images/done.png" alt="Progress" height=25 width=25></img>'
        }
        temp +=
        `<tr id="data${result[i].taskID}">
         <td class='task_id'>${result[i].taskID}</td>
         <td class='task'>${result[i].task}</td>
         <td class='status'>${status}</td>
         <td class='createdAt'>${result[i].createdAt}</td>
         <td class='updatedAt'>${result[i].updatedAt}</td>
         <td><button type="button" class="btn btn-success" onclick="update_task()">Done</button>
         <button type="button" class="btn btn-danger" onclick="delete_task('${result[i].taskID}')">Delete</button></td>
         </tr> `
        }
        $('#list_task').append(temp)
    }
});

function create_task(){
    $.ajax({
        url: "http://localhost:3000/todo",
        method:"POST",
        data:{
                taskID:$('#task_id').val(),
                task:$('#task').val()
             },
        success: function(result) {
          var status = ""
          if(result.status === false){
            status = '<img src="../images/undone.png" alt="Progress" height=25 width=25></img>'
          }else{
            status = '<img src="../images/done.png" alt="Progress" height=25 width=25></img>'
          }
          var temp = `
              <tr id="data${result.taskID}">
                <td class='task_id'>${result.taskID}</td>
                <td class='task'>${result.task}</td>
                <td class='status'>${status}</td>
                <td class='createdAt'>${result.createdAt}</td>
                <td class='updatedAt'>${result.updatedAt}</td>
                <td><button type="button" class="btn btn-success" onclick="update_task(${result.taskID})">Done</button>
                <button type="button" class="btn btn-danger" onclick="delete_task('${result.taskID}')">Delete</button></td>
              </tr>  `
              $('#list_task').append(temp)
              $('#task_id').val("")
              $('#task').val("")
        }
    });
}

function delete_task(id){
    $.ajax({
        url: "http://localhost:3000/todo",
        method:"delete",
        data:{
        taskID: id
      },
        success: function(result) {
          $(`#data${id}`).remove()
        }
    });
}

function update_task(input){
    $.ajax({
        url: "http://localhost:3000/todo",
        method:"put",
        data:{
          taskID: input
             },
        success: function(result) {
          console.log(result);
          $(`#data${result.taskID} td.status`)[0].innerHTML = '<img src="../images/done.png" alt="Progress" height="25" width="25">'
        }
    });
}
