# Unexpected NaN Result from Subtracting Undefined in JavaScript

This repository demonstrates a common yet subtle error in JavaScript related to loose typing and the `undefined` value.

## The Problem

When subtracting `undefined` from a number in JavaScript, the result is `NaN` (Not a Number). This can be difficult to debug if not anticipated.

## The Code

The `bug.js` file contains a simple function that subtracts two numbers. However, when one of the arguments is `undefined`, the function returns `NaN`.

## The Solution

The `bugSolution.js` file demonstrates how to handle this issue by using explicit checks for `undefined` or using optional chaining and nullish coalescing for cleaner code.