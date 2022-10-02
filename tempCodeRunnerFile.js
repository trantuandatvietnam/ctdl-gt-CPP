function multipleTwoRow(number, baseArrElv) {
  let arr1 = number.split("").splice(0, baseArrElv.length);
  let results = [];
  for (let i = 0; i < arr1.length; i++) {
    results.push(Number(arr1[i]) + Number(baseArrElv[i]));
  }
  console.log("1" + results.join("") + number.slice(arr1.length));
  return "1" + results.join("") + number.slice(arr1.length);
}
multipleTwoRow("123321", "111");