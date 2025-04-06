alert("Working");


document.addEventListener("keydown",function (event){
    makesound(event.key);
    react(event.key);
    
})


for(var i=0; i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
   var key=this.innerHTML;
    makesound(key);
    react(key);
})
}




function makesound (key){
   
  switch (key) {
    case "w" : var audiotom1=new Audio('./sounds/tom-1.mp3');
     
      audiotom1.play();
        
        break;
    case "a" :var audiotom2=new Audio('./sounds/tom-2.mp3');
     
    audiotom2.play(); 
    break;
    case "s" :var audiotom3=new Audio('./sounds/tom-3.mp3');
     
    audiotom3.play();
    break;

    
    case "d":var audiotom4=new Audio('./sounds/tom-4.mp3');
     
    audiotom4.play();
    break;


    case "j" :var audiocrash=new Audio('./sounds/crash.mp3');
     
    audiocrash.play();
    break;

    case "k" :var audiokick=new Audio('./sounds/kick-bass.mp3');
     
    audiokick.play();
    break;
   
    case "l" :var audiosnare=new Audio('./sounds/snare.mp3');
     
    audiosnare.play();
    break;
  

  } 
   
   
    
}

setTimeout()


function react (key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout( function (){
        document.querySelector("."+key).classList.remove("pressed");
    },200);
}

