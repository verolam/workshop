/* TODO LIST
---------------------------------*/

let todoList = [
  "Go shopping",
  "Buy tobacco",
  "Do this",
  "Do that"
];

console.log("List in the beginning", todoList);


// Access to one element of the list
// We access to one element of an array with an index. 
// Note: Array indexes start with 0.

let elt = todoList[0]


// ADD an element to THE ARRAY
todoList.push("Do also that (it important");
console.log("List after push",todoList);

// DELETE FROM ARRAY
todoList.splice(1, 1);
console.log("List after splice", todoList);


