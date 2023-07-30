// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once

// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4

export const sumOfIntervals = (intervals: [number, number][]): number => {
  const sortedIntervals = intervals.slice().sort((a, b) => a[0] - b[0]);

  let sum = 0;
  let activeStart = sortedIntervals[0][0];
  let activeEnd = sortedIntervals[0][1];

  // Line sweep
  for (let i = 1; i < sortedIntervals.length; i++) {
    const [currentStart, currentEnd] = sortedIntervals[i];

    if (currentStart > activeEnd) {
      // Non-overlapping interval found, add its length to the sum
      sum += activeEnd - activeStart;
      activeStart = currentStart;
      activeEnd = currentEnd;
    } else {
      // Overlapping interval found, update the activeEnd if needed
      activeEnd = Math.max(activeEnd, currentEnd);
    }
  }

  sum += activeEnd - activeStart;

  return sum;
};
