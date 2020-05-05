/* DATES
------------------------------------*/

// today's date ==> Tue May 05 2020 21:37:27 GMT+0200 (heure d’été d’Europe centrale)
let d = new Date(); 
console.log(d);  

// year format YYYY ==> 2020
year = d.getFullYear(); 
console.log(year); 

 // Month as a number !!!! month start with index 0 so ==> 04 means May 
month = d.getMonth();
console.log(month);


// Different way to display date

const myBirthday = new Date('October 24, 1992 22:15:00');

myBirthday.toString()  // "Sat Oct 24 1992 22:15:00 GMT+0100 (heure normale d’Europe centrale)"
myBirthday.toTimeString() //"22:15:00 GMT+0100 (heure normale d’Europe centrale)"
myBirthday.toUTCString()  //"Sat, 24 Oct 1992 21:15:00 GMT"
myBirthday.toDateString() //"Sat Oct 24 1992"
myBirthday.toISOString()  //"1992-10-24T21:15:00.000Z"
myBirthday.toLocaleString() //"24/10/1992 à 22:15:00"
myBirthday.toLocaleTimeString()	//22:15:00






