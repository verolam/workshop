// If you re inside a function you can look out and see data (variables) but 
// the opposite is not true : You can't from outside a function get a variable in function 

// HTML AND DOM : Ther eshould be a button for displayItems and ToggleAll

// Object
//------------------
let todoItems = {
  items : [ 

  ],

  displayItems : function() {
    if ( this.items.length === 0 ) {
      console.log("Your Items list is empty !!!")
    } else {
      console.log('My items:');
      for (let i=0; i<this.items.length; i++){
       
        //check if .completed is true or false ==> print : (X) or ( )
        if (this.items[i].completed === true ) {
          console.log ('(X)',this.items[i].todoText );
        } else {
          console.log ('( )',this.items[i].todoText );
        }
      }
    }
   
  },

  addItem : function(todoText){
    this.items.push({
      todoText : todoText,
      completed : false
    });
    this.displayItems();
  },

  changeItem : function(position, todoText) {
    //this.items[position] = newValue;
    this.items[position].todoText = todoText;
    this.displayItems();
  },

  deleteItem : function(position) {
    this.items.splice(position,1); // if you put only position , delete all items after position!!
    this.displayItems();
  },

  toggleCompleted : function(position) {
    let item = this.items[position]; // Target the item's position to change completed
    item.completed = !item.completed; // toggle completed change status false<=>true
    this.displayItems();
  },

  // Case 1 : Toggle All : If everything is completed = true, make everything completed = false
  toggleAll : function() {
    let totalItems = this.items.length;
    let totalCompleted = 0;
    //Get total of completed
    for (let i=0; i< totalItems; i++) {
      if ( this.items[i].completed === true) {
        totalCompleted++;
      } 
    }
    if (totalCompleted === totalItems ) {
      for (let i=0; i < totalItems; i++) {
        this.items[i].completed = false;
      } 
    } 
    // Case 2 : otherwise make everything false  
    else {
      for (let i=0; i < totalItems; i++) {
        this.items[i].completed = true;
      }
    }
    this.displayItems();
  }
   
}

// 1-  We want to get access to the Display Todos button
// 2 - We want to run the DisplayItem Method when someone 
//     click on the button display

let displayItemsButton = document.getElementById('displayItemsButton');

todoItems.addItem('Bread');
todoItems.addItem('Tomatoe');

displayItemsButton.addEventListener('click', function() {
  todoItems.displayItems();
});

let toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function () {
  todoItems.toggleAll();
})
