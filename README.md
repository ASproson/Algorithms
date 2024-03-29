# Algorithms

Here are all my solutions for various algorithm challenges across many different platforms such as Leetcode, CodeWars, NeetCode, AlgoExpert, and many more

Every Algorithm will have a Jest test associated with it and a few comments regarding the Space/Time complexity of each algorithm

## Installation

Open a terminal in your chosen directory and paste the following:

> `git clone https://github.com/ASproson/Algorithms.git`

> `npm i`

## Test Running

You can run entire test categories with the commands:

```bash
npm run testSuperEasy
npm run testEasy
npm run testMedium
npm run testHard
```

Alternatively you can run tests individually by modifying the package.json script:

```JSON
  "scripts": {
    "test": "jest --watch tests/H_sumOfIntervals.test.js"
  }
```

If you want to run the test `H_matrixDetermination.test.ts` instead, simply replace `H_sumOfIntervals.test.ts` with `H_matrixDetermination.test.ts`. To run a test, enter the following command:

> `npm t`

###

If you're cloning this repo to try your own solutions you'll benefit from turning on auto-compile within TypeScript when you hit save, you can do this by running this command in the terminal:

`tsc -w`
