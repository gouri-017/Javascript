// alert("hie")

// var audio = new Audio("audio/crash.mp3")
// audio.play();


function dowhenclick (){
//   alert("u clicked me")
   // console.log(this.innerHTML);
   var buttonInnerHtml = this.innerHTML;
   // console.log(buttonInnerHtml)
   makesound(buttonInnerHtml);
   
}

const numberofbuutons = document.querySelectorAll(".drum")

for (let i = 0; i < numberofbuutons.length; i++) {
   numberofbuutons[i].addEventListener("click", dowhenclick);
  
   
  
}
document.addEventListener("keypress", function(event){
   // alert("key pressed")
   makesound(event.key);
});
function makesound(key){

switch(key){
      case "w":
         var tom1 = new Audio("audio/tom-1.mp3")
         tom1.play();
         break;
      case "a":
         var tom2 = new Audio("audio/tom-2.mp3")
         tom2.play();
         break;
      case "s":
         var tom3 = new Audio("audio/tom-3.mp3")
         tom3.play();
         break;
      case "d":
         var tom4 = new Audio("audio/tom-4.mp3")
         tom4.play();
         break;
      case "j":
         var crash = new Audio("audio/crash.mp3")
         crash.play();
         break;
      case "k":
         var kickbass = new Audio("audio/kick-bass.mp3")
         kickbass.play();
         break;
      case "l":
         var snare = new Audio("audio/snare.mp3")
         snare.play();
         break;

      default:
         console.log(buttonInnerHtml)

   }
}

