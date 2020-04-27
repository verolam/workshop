let todos = {

/* TODO LIST - Global scope
---------------------------------*/

todoList : [
  "Go shopping",
  "Buy tobacco",
  "Do this",
  "Do that"
],

/* DISPLAY TODO
---------------------------------*/
displayTodos: function(){
  console.log(this.todoList);
},


/* ADD TODO
---------------------------------*/
addTodos: function(arg){
 
  this.todoList.push(arg);

  this.displayTodos();
},


/* Change a TODO
---------------------------------*/
changeTodo: function(index, text){
  this.todoList[index] = text;
  this.displayTodos();
},


  /* Delete a TODO
---------------------------------*/
deleteTodo: function(index1, numberToDelete = 1){
  
  this.todoList.splice(index1, numberToDelete);
  this.displayTodos();
  
}


}


todos.displayTodos();
todos.addTodos(1);
todos.changeTodo(1,"blabla");
todos.deleteTodo(1, 2);













  
  




  
  