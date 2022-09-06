let family = {
  incomes: [2000],
  expenses: [1100, 700, 1500]
}

function sum(array) {
  let total = 0
  
  for(let value of array)
    total += value
  
  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)
  
  const total = calculateIncomes - calculateExpenses
  
  const itsOk = total >= 0

  let balanceText = "negativo"

  if (itsOk) {
    balanceText = "positivo"
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)
}


calculateBalance()