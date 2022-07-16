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
  let totalAmount = 0;
  let loanRate = parseInt(percent) / 100;
  let firstPayment = parseInt(contribution);
  let objectPrice = parseInt(amount);
  if (Number.isNaN(loanRate)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if (Number.isNaN(firstPayment)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } 
  else if (Number.isNaN(objectPrice)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`; 
  }
  let actualDate = new Date();
  let loanParams = {
      rate: loanRate * 100,
      loanAmount: 0,
      monthsCount: 0,
      fullCostOfFunds: 0
      }
  if ((date.getFullYear() >= actualDate.getFullYear()) && (date.getMonth() < 12) && (date.getMonth() >= 0) && (date.getDate() < 32) && (date.getDate() >= 1)) {
    loanParams.loanAmount = objectPrice - firstPayment;
    loanParams.monthsCount = (date.getFullYear() - actualDate.getFullYear()) * 12 + date.getMonth() - actualDate.getMonth();
    let annuityPayment = loanParams.loanAmount * loanRate / 12 * (1 + 1 / (Math.pow(1 + loanRate / 12, loanParams.monthsCount) - 1));
    loanParams.fullCostOfFunds = (annuityPayment * loanParams.monthsCount).toFixed(2);
    totalAmount = parseFloat(loanParams.fullCostOfFunds);
  }
  else {
    totalAmount = 'Неверный формат даты. Дату необходимо указать в следующем формате - ДД.ММ.ГГГГ.';
  }
  return totalAmount;
}
