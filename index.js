//function adddOne(arr) {}

//--1
const addOne = (arr) => {
  let res = [];
  arr.forEach(function (item) {
    res.push(item + 1);
  });
  //console.log(8);
  return res;
};

//---2
const addExclamation = (arr) => {
  let res = [];
  arr.forEach(function (item) {
    res.push(item + "!");
  });
  console.log(one);
  return res;
};

//-- 3
const addOneByMap = (arr) => {
  let res = arr.map(function (item) {
    return item + 1;
  });
  return res;
};
//--4
const addQuestion = (arr) => {
  let res = arr.map(function (item) {
    return item + "?";
  });
  return res;
};

//--5
const forLoopTwoToThe = (arr) => {
  let res = arr.map(function (item) {
    return Math.pow(item, 2);
  });
  return res;
};

//--6
const typeNum = (arr) => {
  let res = arr.filter(function (item) {
    return typeof item === "number";
  });
  return res;
};

//---7
const containsAnd = (arr) => {
  let aetr = arr.filter((item) => {
    return item.includes("and");
  });
  return aetr;
};

//--8
const oddValues = (arr) => {
  const akoo= arr.filter((item) => {
    if (item % 2 != 0) {
      return item;
    }
  });
  return akoo;
};

