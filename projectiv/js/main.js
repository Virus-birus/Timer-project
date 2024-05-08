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

const AddTimes = document.querySelector('.AddTimes') //button

//1
const wd_timer = document.querySelector('.wd_timer')
const wh_timer = document.querySelector('.wh_timer')
const ws_timer = document.querySelector('.ws_timer')

//2
const wd_timerr = document.querySelector('.wd_timerr')
const wh_timerr = document.querySelector('.wh_timerr')
const ws_timerr = document.querySelector('.ws_timerr')




AddTimes.addEventListener('click', () => {
   const wd_timerrs = wd_timerr.value
   const wh_timerrs = wh_timerr.value
   const ws_timerrs = ws_timerr.value

   wd_timer.innerText = wd_timerrs 
   wh_timer.innerText = wh_timerrs 
   ws_timer.innerText = ws_timerrs

   conteiner_1.classList.remove('conteiner_11')
   conteiner_2.classList.add('conteiner_22')
    
   if(wd_timerr.value === '' && wh_timerr.value === '' && ws_timerr.value === '') {
    wd_timer.innerText = '00'
    wh_timer.innerText = '00'
    ws_timer.innerText = '00'
   }

})

 

