localStorage.setItem("estado", JSON.stringify([1,2,3,4,5]));

console.log(JSON.parse(localStorage.getItem("estado")));
console.log(typeof JSON.parse(localStorage.getItem("estado")));