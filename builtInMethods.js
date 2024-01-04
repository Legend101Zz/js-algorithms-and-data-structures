//========= BIG-O OF OBJECTS ( KEY-VALUE PAIRS) uses hashmaps=========

// INSERTION - O(1)
// REMOVAL - O(1)
// SEARCHING - O(N)
// ACCESS - O(1)

//METHODS

let instructor = {
  name: "Mrigesh",
  isHealthy: true,
  classes: [2, 5, 6],
};

// OBEJECT.keys() - O(n)
console.log(Object.keys(instructor));
// OBEJECT.values() - O(n)
console.log(Object.values(instructor));
// OBEJECT.entries() - O(n) -though more operations then keys method
console.log(Object.entries(instructor));
// OBEJECT.hasOwnProperty() - O(1)
console.log(Object.hasOwnProperty("nam"));

//========= BIG-O OF ARRAYS ( ordered DS) =========

// insertion BIG-O depends on where we want to insert the new element
// removal BIG-O depends on where we want to insert the new element
// searching - O(N)
// access - O(1)

let names = ["ram", "shyam", "ghyansam"];

//push -O(1)
console.log(names.push("Rahul"));

//pop -O(1)
console.log(names.pop());

// shift - O(N)
console.log(names.shift());

// unshift -O(N)
console.log(names.unshift("noyal"));

// concat - O(N)
console.log(names.concat(["yoo", "noo"]));

// slice - O(N)
console.log(names.slice(1, 4));

// splice - O(N)
console.log(names.splice(4, 1, "mrigesh"));
