let stringAndNumbers: string | number;

stringAndNumbers = 2;

// when creating arrays, make sure to define it with an array
// otherwise the variable is left unassigned and you will need
// to assign it to an array later
let arr: string[] = [];
let arr2: (string | number)[] = [];
arr2.push(23);
arr2.push("hei");

// union type
console.log(arr2);
