const buttonTurn = document.querySelector(".buttonTurn")
const buttonStop = document.querySelector(".buttonStop")
const sofaTurning = document.querySelector(".sofaTurning")
const sofaStatic = document.querySelector(".sofaStatic")

sofaTurning.classList.add("hide")
buttonStop.classList.add("hide")

buttonTurn.addEventListener("click", (e) =>{
  e.preventDefault()
sofaStatic.classList.add('hide')
sofaTurning.classList.remove('hide')

buttonTurn.classList.add('hide')
buttonStop.classList.remove('hide')
})

buttonStop.addEventListener("click", (e)=>{
  e.preventDefault()
  sofaStatic.classList.remove('hide')
  sofaTurning.classList.add("hide")

  buttonTurn.classList.remove('hide')
  buttonStop.classList.add('hide')
})