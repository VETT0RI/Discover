function transformDegree(degree){
  const celsiusExistis = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')
  if (celsiusExistis) {
    let updatedDegree = Number(degree.toUpperCase().replace("C", ""))
    let formula = (celsius) => (celsius * 9/5) + 32
    let degreeSign = "C"
    return formula (updatedDegree) + degreeSign
  } else if (fahrenheitExists){
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "F"
    return formula (updatedDegree) + degreeSign
  } else {
    throw new Error('Grau não identificado')
  }
}

try {
  console.log(transformDegree('30F'))
} catch (error) {
  console.log(error.message)
}