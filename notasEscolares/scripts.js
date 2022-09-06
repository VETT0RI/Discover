function getNote(nota) {
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota < 90 && nota >= 80
  let notaC = nota < 80 && nota >= 70
  let notaD = nota < 70 && nota >= 60
  let notaF = nota < 60 && nota >= 0
  let notaFinal

  if (notaA) {
    notaFinal = 'A'
  } else if (notaB) {
    notaFinal = 'B'
  } else if (notaC) {
    notaFinal = 'C'
  } else if (notaD) {
    notaFinal = 'D'
  } else if (notaF) {
    notaFinal = 'F'
  } else {
    notaFinal = "Nota Inválida"
  }

  return notaFinal

}

console.log(getNote(101))
console.log(getNote(-1))
console.log(getNote(0))
console.log(getNote(1))
console.log(getNote(45))
console.log(getNote(60))
console.log(getNote(61))
console.log(getNote(75))
console.log(getNote(85))
console.log(getNote(95))