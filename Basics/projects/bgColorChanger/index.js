

// pinkButton = document.querySelector('#pink')
// blueButton = document.querySelector('#blue')
// orangeButton = document.querySelector('#orange')
// greenButton = document.querySelector('#green')


function changeBg(event){
  let color  = event.target.id;
  console.log(color);
  
  document.body.style.backgroundColor = color

}

allButtons = document.querySelectorAll('.inner-box')
console.log(allButtons);


for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click",changeBg)
  // (ev)=>{
  //   console.log(ev);
  //   console.log(ev.target.id);
  //   document.body.style.backgroundColor = ev.target.id
    
    
  // })
  
}