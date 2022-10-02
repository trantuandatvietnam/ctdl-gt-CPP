function convertQuantityToStringNumber(quantity) {
  let stringNumber = "";
  for (let i = 1; i <= quantity; i++) {
    stringNumber += "1";
  }
  return stringNumber;
}

function multipleTwoRow(number, baseArrElv) {
  let arr1 = number.split("").splice(0, baseArrElv.length);
  let results = [];
  for (let i = 0; i < arr1.length; i++) {
    let num = Number(arr1[i]) + Number(baseArrElv[i]);
    results.push(num % 10);
  }
  return "1" + results.join("") + number.slice(arr1.length);
}

function solutionHere(quantity) {
  let baseNumber = convertQuantityToStringNumber(quantity);
  let baseArrElv = baseNumber.split("").slice(1);
  let result = baseNumber;
  for (let i = 1; i <= quantity - 1; i++) {
    result = multipleTwoRow(result, baseArrElv);
  }
  return Number(result);
}

console.log(solutionHere(91));
