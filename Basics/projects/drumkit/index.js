// alert("hie")

// var audio = new Audio("audio/crash.mp3")
// audio.play();


function dowhenclick (){
//   alert("u clicked me")
   // console.log(this.innerHTML);
   var buttonInnerHtml = this.innerHTML;
   console.log(buttonInnerHtml)
   switch(buttonInnerHtml){
      case "w":
         var audio = new Audio("audio/tom-1.mp3")
         audio.play();
         break;
      case "a":
         var audio = new Audio("audio/tom-2.mp3")
         audio.play();
         break;
      case "s":
         var audio = new Audio("audio/tom-3.mp3")
         audio.play();
         break;
      case "d":
         var audio = new Audio("audio/tom-4.mp3")
         audio.play();
         break;
      case "j":
         var audio = new Audio("audio/crash.mp3")
         audio.play();
         break;
      case "k":
         var audio = new Audio("audio/kick-bass.mp3")
         audio.play();
         break;
      case "l":
         var audio = new Audio("audio/snare.mp3")
         audio.play();
         break;

      default:
         console.log(buttonInnerHtml)

   }
}

const numberofbuutons = document.querySelectorAll(".drum")

for (let i = 0; i < numberofbuutons.length; i++) {
   numberofbuutons[i].addEventListener("click", dowhenclick);
  
   
  
}

