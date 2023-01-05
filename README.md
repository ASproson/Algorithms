# Algorithms

Here are all my solutions for various algorithm challenges across many different platforms such as Leetcode, CodeWars, NeetCode, and AlgoExpert.

Every Algorithm will have a Jest test associated with it and a few comments regarding the Space/Time complexity of each algorithm

## Naming Convention

Each Algorithm will start with the naming convention below, just to make it easier to determine what the relative difficulty of each is

_(Super Easy, Easy, Medium, Hard, Very Hard)_

- SE\_
- E\_
- M\_
- H\_
- VH\_

## Installation

Open a terminal in your chosen directory and paste the following:

> `git clone https://github.com/ASproson/Algorithms.git`

> `npm i`

## Test Running

Tests are ran individually by modifying the package.json script:

```JSON
  "scripts": {
    "test": "jest tests/add.test.js"
  }
```

If you want to run the test `groupedAnagrams.ts` instead, simply replace `add.test` with `groupedAnagrams.test`. To run a test, enter the following command:

> `npm t`

###

If you're cloning this repo to try your own solutions you'll benefit from turning on auto-compile within TypeScript when you hit save, you can do this by running this command in the terminal:

`tsc -w`
