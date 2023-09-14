// My global variable
const time = document.querySelector('.timer')
const start = document.querySelector('.Start')

// Adding event listener to start button
start.addEventListener('click', startbtn)

// create a variable that will increment
let seconds = 0
let interval = null

// funtion to calculate the time, day, mint and seconds
function timer() {
  // increment the function each time this function is being called
  seconds++

  // calculate the day, hour, mint and secs
  let day = Math.floor(seconds / 86400)
  let hour = Math.floor(seconds / 3600)
  let mint = Math.floor((seconds - (hour * 3600)) / 60)
  let secs = seconds % 60

  // Adding zero to the number when it less then 10
  if (day < 10) day = '0' + day
  if (hour < 10) hour = '0' + hour
  if (mint < 10) mint = '0' + mint
  if (secs < 10) secs = '0' + secs

  // finally display it
  time.innerHTML = `${day} <span class = "gray">:</span> ${hour} <span class = "gray">:</span> ${mint} <span class = "gray">:</span> ${secs}`
}

let btn_El = document.querySelector('.btn')


function startbtn() {
  if (start.innerHTML === '<i class="fa-solid fa-play" style="color: #f4f5f6;"></i>') {
    start.innerHTML = '<i class="fa-solid fa-pause" style="color: #fafafa;"></i>'
    start.classList.add('star')
    render()
    if (interval) {
      return
    }
    interval = setInterval(timer, 1000)
  } else if (start.innerHTML === '<i class="fa-solid fa-pause" style="color: #fafafa;"></i>') {
    //console.log('hi');
    start.innerHTML = '<i class="fa-solid fa-play" style="color: #f4f5f6;"></i>'
    pausebtn()
  } 
}

  let html = document.createElement('button')
  html.innerHTML = `<i class="fa-solid fa-rotate-right" style="color: #fcfcfc;"></i>`
  html.classList.add('Reset')

function render() {
  btn_El.appendChild(html)

  
  let reset = document.querySelector('.Reset')

  function resetbtn() {
    pausebtn()
    seconds = 0
    btn_El.removeChild(html)
    start.classList.remove('star')


    if (start.innerHTML === '<i class="fa-solid fa-pause" style="color: #fafafa;"></i>') start.innerHTML = '<i class="fa-solid fa-play" style="color: #f4f5f6;"></i>'
    time.innerHTML = `00 <span class = "gray">:</span> 00 <span class = "gray">:</span> 00 <span class = "gray">:</span> 00`
  }
  reset.addEventListener('click', resetbtn)
}

function pausebtn() {
  clearInterval(interval)
  interval = null
  //btn_El.removeChild(html)
}
