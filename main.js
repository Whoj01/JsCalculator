// connecting DOM to Js //
const buttons = document.querySelectorAll('.button')

const equal = document.querySelector('.buttonEqual')

const clearOne = document.querySelector('.clearOne')

const clearAll = document.querySelector('.cleaner')

// Callbacks when clicked //

clearAll.addEventListener('click', () => {
  result.innerHTML = ''
})

clearOne.addEventListener('click', () => {
  let number = result.innerHTML
  result.innerHTML = number.substring(0, number.length - 1)
})

equal.addEventListener('click', () => {
  let resultado = result.innerHTML
  // if have number to do the function //
  if (resultado) {
    result.innerHTML = eval(resultado)
  } else {
    result.innerHTML = 'nada...'
  }
})

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    let showNumber = result.innerHTML

    result.innerHTML = showNumber + e.target.value
  })
})
