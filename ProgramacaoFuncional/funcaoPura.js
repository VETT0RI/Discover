let person = {
  name: "Garibaldo",
  age: "bird"
}

// Função pura

// Exemplo 1
/*const calculateCircumference = function (pi, radius) {
  return pi * (radius + radius)
}*/

// com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius)

// Exemplo 2
 //const changePersonName = (person, name) => {{...person, name}}