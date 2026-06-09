allButtons = document.querySelectorAll('.number')
allButtons.forEach(button => {
  button.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target.id);
    let num = e.target.textContent
    
    console.log(typeof(num));
    num = Number(num)
    console.log(num+4);
    
    
    
  })
  
});