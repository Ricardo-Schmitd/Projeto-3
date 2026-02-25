function insertToDisplay(data) {
  let char 

  switch (data) {
    case Number.isNaN(data):
      window.alert('Por favor, insira um caracter válido.')
      break;

    default: 
      char = data
  }  

  document.querySelector('#display').value += char
}

function clean(){
  document.querySelector('#display').value = ''
}

function back(){
  const display = document.querySelector('#display')
  display.value = display.value.slice(0, -1)
}

function result(){
  const display = document.querySelector('#display')
  display.value = display.value.replaceAll('x', '*')
  try {
      display.value = eval(display.value)
  } catch {
      display.value = 'Error'
  }
}