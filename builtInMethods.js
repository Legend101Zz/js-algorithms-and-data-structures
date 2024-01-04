// BIG-O OF OBJECTS ( KEY-VALUE PAIRS) uses hashmaps
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
// OBEJECT.entries() - O(n) -though more operations then keys method
console.log(Object.entries(instructor));
// OBEJECT.hasOwnProperty() - O(1)
console.log(Object.hasOwnProperty("nam"));
