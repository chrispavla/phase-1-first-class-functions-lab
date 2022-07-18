// // Code your solution in this file!
// const returnFirstTwoDrivers = function(drivers) {
//     return drivers.slice(0,2)
// }

// const returnLastTwoDrivers = function(drivers) {
//     return drivers.slice(2,4)
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(num) {
//     return function(number) {
//         return number * num
//     }
// }

// const fareDoubler = createFareMultiplier(2)

// const fareTripler = createFareMultiplier(3)

// function selectDifferentDrivers(drivers, func) {
//     return func(drivers)
// }

// console.log(fareDoubler(2))
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function (arr) {
  return arr.slice(2, arr.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function (num) {
    return int * num;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, func) {
  return func(arr);
}
