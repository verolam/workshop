let todos = {

/* TODO LIST - Global scope
---------------------------------*/

todoList : [

  {
    text: "Go shopping",
    completed: false
  },

  {
    text: "Buy tobacco",
    completed: false
  },
  
  {
    text:  "Do this",
    completed: false
  },
 
  {
    text: "Do that",
    completed: false
  }
 
],



/* DISPLAY TODOs
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


console.log( todos.todoList[0].text );
console.log( todos.todoList[0].completed );













  
  




  
  