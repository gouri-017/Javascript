// alert("hie")

// var audio = new Audio("audio/crash.mp3")
// audio.play();


function dowhenclick (){
  // alert("u clicked me")
   console.log(this.innerHTML);
  
}

const numberofbuutons = document.querySelectorAll(".drum")

for (let i = 0; i < numberofbuutons.length; i++) {
   numberofbuutons[i].addEventListener("click", dowhenclick);
  
   
  
}

