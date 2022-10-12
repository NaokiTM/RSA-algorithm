const p = 3 document.getElementById("")//first prime number
const q = 11 document.getElementById("")//second prime number
const areCoprimes = (num1, num2) => {
  const smaller = num1 > num2 ? num1 : num2;
  for (let ind = 2; ind < smaller; ind ++) {
        const condition1 = num1 % ind === 0;
        const condition2 = num2 % ind === 0;
        if(condition1 && condition2){
          return false;
        }; 
  };
  return true;
};
let e = document.getElementById().value

function encrypt {
    let n = p*q //n = 33 (3 X 11)
    let r = (p - 1) * (q - 1)

    if (e > 1 || e < r) {
      if ((areCoprimes(e,r)) == true) {
          let e = 7
          let d = document.getElementById().value

          if ((d*e) % r = 1) {
            
          } else {
            console.log("not a valid value for d")
          }
    } else {
          console.log("not a valid value for e")
      }
    } 

    
}

