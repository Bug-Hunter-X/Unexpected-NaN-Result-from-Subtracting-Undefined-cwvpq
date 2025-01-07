function myFunc(a, b) {
  if (b === undefined) {
    return a; // Handle undefined as 0 or a default value
  } else {
    return a - b; 
  }
}

//Or using optional chaining and nullish coalescing for ES2020+
function myFunc(a, b) {
  return a - (b ?? 0); //Nullish coalescing uses 0 if b is null or undefined. 
}
console.log(myFunc(5, undefined)); // Output: 5 (or handle as appropriate)