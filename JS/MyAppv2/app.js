// If you re inside a function you can look out and see data (variables) but 
// the opposite is not true : You can't from outside a function get a variable in function 


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
        console.log (this.items[i].todoText);

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
  }
}

 // It should have a DisplayItems Method
 todoItems.displayItems();

 // It should have a addItems Method
 todoItems.addItem('Put a slice of bread');
 todoItems.addItem('Put some onions');

 // it should have a method to change .completed true<=> false
 todoItems.toggleCompleted(1);

 // It should have a changeItems Method
 todoItems.changeItem(1,'Put some tomatoes');



 // It should have a deleteItems Method
 //todoItems.deleteItem(2);
