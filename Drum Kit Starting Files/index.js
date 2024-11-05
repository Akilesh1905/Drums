// var catchingWords=document.querySelector(".drum").textContent;
// console.log(catchingWords);
function clicking(element){
    var catchingWords=element.textContent;
    console.log(element)
    // console.log(catchingWords); 
    switch(catchingWords){
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
           audio.play();
           break;
           case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
           audio.play();
           break;
           case "s":
            var audio = new Audio('./sounds/snare.mp3');
           audio.play();
           break;
           case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
           audio.play();
           break;
           case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
           audio.play();
           break;
           case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
           audio.play();
           break;
           case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
           audio.play();
           break;
           default:
            alert("please click correct key");
    }
    // var audio = new Audio('./sounds/kick-bass.mp3');
    // audio.play();
}
// var second=document.querySelector(".a.drum");
// second.addEventListener("click",two);
// console.log(second);
// function two(){
//     var audio = new Audio('./sounds/crash.mp3');
//     audio.play();

// }
document.addEventListener("keypress",function(event){
    switch(event.key){
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
           audio.play();
           break;
           case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
           audio.play();
           break;
           case "s":
            var audio = new Audio('./sounds/snare.mp3');
           audio.play();
           break;
           case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
           audio.play();
           break;
           case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
           audio.play();
           break;
           case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
           audio.play();
           break;
           case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
           audio.play();
           break;
           default:
            alert("please click correct key");
    }
})