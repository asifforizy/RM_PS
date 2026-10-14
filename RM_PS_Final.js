// 1 
var solveMeFirst = function (a, b) {
    return a + b;
}

// 2

var multiply = function (a, b) {
    return a * b;
};

// 3

var evenOrOdd = function (number) {
    return number % 2 === 0 ? "Even" : "Odd";
};

// 4

var makeNegative = function (number) {
    return number > 0 ? -number : number;
};

// 5

var opposite = function (number) {
    return -number;
};

// 6

var simpleArraySum = function(ar) {
    var sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
};

// 7

var sleepIn = function (weekday, vacation) {
    return !weekday || vacation;
};

// 8

var monkeyTrouble = function (aSmile, bSmile) {
    return aSmile === bSmile;
};


// 9

var sumDouble = function (a, b) {
    var sum = a + b;
    return a === b ? sum * 2 : sum;
};


// 10

var diff21 = function (n) {
    var diff = Math.abs(n - 21);
    return n > 21 ? diff * 2 : diff;
};

// 11

var parrotTrouble = function(talking, hour) {
  if (talking === true) {
    if (hour < 7) {
      return true;
    } else if (hour > 20) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};