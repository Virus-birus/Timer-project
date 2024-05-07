const openn = document.querySelector('.open')
const conteiner_2 = document.querySelector('.conteiner_2')
const conteiner_1 = document.querySelector('.conteiner_1')
const Close = document.querySelector('.Close')


//(1)My Timer
openn.addEventListener('click', () => {
    if(conteiner_2.classList.contains('conteiner_22') === true) {
        conteiner_2.classList.remove('conteiner_22')
        conteiner_1.classList.add('conteiner_11')
    }
})
//(2)Input in my Timer(1)
Close.addEventListener('click', ()=> {
   if (conteiner_1.classList.contains('conteiner_11') === true) {
    conteiner_1.classList.remove('conteiner_11')
    conteiner_2.classList.add('conteiner_22')
   } 
   
})
