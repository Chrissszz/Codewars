// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

//Solution

function past(h, m, s) {
    const milSeconds = 1000;
    const milMinute = 60 * milSeconds;
    const milHour = 60 * milMinute;
  
    const totalMil = h * milHour + m * milMinute + s * milSeconds;
  
    return totalMil;
  }