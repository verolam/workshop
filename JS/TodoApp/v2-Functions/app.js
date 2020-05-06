
/* Function testing if an integer is divisible by 5 
--------------------------------------------------*/
// A number is divisible by 5 if remainder = 0 or 5

function divisibleByFive(int) {
  let modulo2 = 0;
  let output = "";

  modulo2 = (int % 5);
  show(modulo2);
  if (modulo2 == 0 || modulo2 == 5 || modulo2 == -5) {
    output = "true";}
  else { output = "false"; }
  
  console.log("divisibleByFive", output);  
}
  

divisibleByFive(5) // ➞ true
divisibleByFive(-55) // ➞ true
divisibleByFive(37) // ➞ false


