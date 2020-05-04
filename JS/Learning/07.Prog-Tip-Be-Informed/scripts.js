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
  day = new Date().toLocaleDateString( locales, options );

  // OUTPUT DAY
  // show( day );
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