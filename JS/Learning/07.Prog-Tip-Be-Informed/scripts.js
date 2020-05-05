/* PROGRAMMING TIP
 * The "BE INFORMED" principle
 * Always look if a native function
 * exists before building your own
 * logic ;-)
------------------------------------*/
function dayOfTheWeek(locales = undefined) {

  
  let day = '';


  // VARIANTE 1 - Manual days, one language. The first day must be Sunday
  // const weekDays = [
  //   "Sunday", 
  //   "Monday", 
  //   "Tuesday", 
  //   "Wednesday", 
  //   "Thursday", 
  //   "Friday", 
  //   "Saturday"
  // ];
  // day = weekDays[ new Date().getDay() ]; //getDay() returns a number: 0 for Sunday, 1 for Monday, etc.
  

  // VARIANTE 2 - Using Date locales, provided days, any language
  let options = { 
    weekday:  'long', 
    // year:     'numeric', 
    // month:    'long', 
    // day:      'numeric' 
  };


  // The toLocaleString() method returns a string with a 
  // language sensitive representation of this date.

  day = new Date().toLocaleDateString( locales, options );

  // OUTPUT DAY
  show( day );
  show( day, locales );


}

dayOfTheWeek(); //ouputs the default 'en-US'
// dayOfTheWeek('ar-SA');
// dayOfTheWeek('ar-EG');
// dayOfTheWeek('fr-TU');
// dayOfTheWeek('fr-CH');
// dayOfTheWeek('de-DE');
// dayOfTheWeek('it-IT');
// dayOfTheWeek('ka-GE'); // doesn't work, JS doesn't recognise it ☹️
// dayOfTheWeek('ru-RU');
// dayOfTheWeek('el-GR');
// dayOfTheWeek('ku-TR');
// dayOfTheWeek("th-u-ca-buddhist-nu-thai");

  dayOfTheWeek('sq-AL');



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
