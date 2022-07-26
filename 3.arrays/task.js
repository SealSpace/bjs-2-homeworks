function compareArrays(arr1, arr2) {
  let result;

  function everyCompare(index) {

    return arr1[index] === arr2[index];

  }
  result = arr1.length === arr2.length && arr1.every(everyCompare)

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr
  .filter((arr) => arr > 0)
  .filter((arr) => arr % 3 === 0)
  .map((arr) => arr * 10);

  return resultArr; // array
}
