"use strict";
function solveEquation(a, b, c) {
  let arr;
      let sqroot1,sqroot2;
      let d = Math.pow (b,2)-4*a*c;
          if (d > 0) {
              sqroot1 = (-b + Math.sqrt(d) )/(2*a);
              sqroot2 = (-b - Math.sqrt(d) )/(2*a);
              arr = [sqroot1,sqroot2]
          } 
          else if (d == 0) {
              sqroot1 = -b/(2*a);
              arr = [sqroot1]
          }
          else if (d < 0) {
              arr = []
          }
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
