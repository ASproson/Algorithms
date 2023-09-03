const digitFollowedByAllZeroes = (n: number): number => {
  const strConversion = String(n);
  const strConversionOne = String(n + 1);
  const strConversionTwo = String(n + 2);

  if (
    strConversion
      .slice(1)
      .split('')
      .every((e) => e === '0')
  )
    return 2;
  if (
    strConversionOne
      .slice(1)
      .split('')
      .every((e) => e === '0') ||
    strConversionTwo
      .slice(1)
      .split('')
      .every((e) => e === '0')
  )
    return 1;

  return 0;
};

const everyDigitIsTheSameNumber = (n: number): number => {
  const arr = [...n.toString()].map(Number);
  if (arr.every((e) => e === arr[0])) return 2;
  if (arr.every((e) => e === arr[0] + 1 || e === arr[0] + 2)) return 1;
  return 0;
};

const numbersAreSequential = (n: number): number => {
  const numberString = String(n).split('');
  const numberStringOne = String(n + 1).split('');
  const numberStringTwo = String(n + 2).split('');

  let oneCounter = 0;
  let twoCounter = 0;

  for (let i = 1; i < numberString.length; i++) {
    let curr = Number(numberString[i]);
    let currOne = Number(numberStringOne[i]);
    let currTwo = Number(numberStringTwo[i]);

    let prev = Number(numberString[i - 1]);
    let prevOne = Number(numberStringOne[i - 1]);
    let prevTwo = Number(numberStringTwo[i - 1]);

    if (prev + 1 === curr || prev - 1 === curr) {
      twoCounter++;
    } else if (
      prevOne + 1 === currOne ||
      prevOne - 1 === currOne ||
      prevTwo + 1 === currTwo ||
      prevTwo - 1 === currTwo
    ) {
      oneCounter++;
    }
  }

  if (twoCounter === String(n).length) return 2;
  if (oneCounter === String(n).length) return 1;
  return 0;
};

const determinePalindrome = (n: number): number => {
  const reversedString = String(n).split('').reverse().join('');
  const reversedStringAddOne = String(n + 1)
    .split('')
    .reverse()
    .join('');
  const reversedStringAddTwo = String(n + 2)
    .split('')
    .reverse()
    .join('');
  if (String(n) === reversedString) return 2;
  if (
    String(n + 1) === reversedStringAddOne ||
    String(n + 2) === reversedStringAddTwo
  )
    return 1;

  return 0;
};

const numberIsInPhrases = (n: number, phrases: number[]) => {
  if (phrases.includes(n)) return 2;
  if (phrases.includes(n + 1) || phrases.includes(n + 2)) return 1;
  return 0;
};

export const isNumberInteresting = (
  n: number,
  awesomePhrases: number[]
): number => {
  if (n <= 99) return 0;

  const isNumberInPhrases = numberIsInPhrases(n, awesomePhrases);
  const areDigitsTheSame = everyDigitIsTheSameNumber(n);
  const isPalindrome = determinePalindrome(n);
  const isAllZeroes = digitFollowedByAllZeroes(n);
  const isSequential = numbersAreSequential(n);

  if (areDigitsTheSame !== 0) return areDigitsTheSame;
  if (isAllZeroes !== 0) return isAllZeroes;
  if (isSequential !== 0) return isSequential;
  if (isNumberInPhrases !== 0) return isNumberInPhrases;
  if (isPalindrome !== 0) return isPalindrome;

  return 0;
};

// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/typescript

// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// // "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.
