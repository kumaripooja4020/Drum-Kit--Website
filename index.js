

alert("click here this page");

var numverOfDrumButtons=document.querySelectorAll(".drum").length;


for(var i=0;i<numverOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        this.style.color="purple";

        var buttonInnerHTML=this.innerHTML;
        switch(buttonInnerHTML){
            case"w":
            var sound1=new Audio("sound/sound-1.mp3");
            sound1.play();
            break;


            case"a":
            var sound2=new Audio("sound/sound-2.mp3");
            sound2.play();
            break;

            case"s":
            var sound3=new Audio("sound/sound-3.mp3");
            sound3.play();
            break;


            case"d":
            var sound4=new Audio("sound/sound-4.mp3");
            sound4.play();
            break;


            case"j":
            var sound5=new Audio("sound/sound-5.mp3");
            sound5.play();
            break;


            case"k":
            var sound6=new Audio("sound/sound-6.mp3");
            sound6.play();
            break;



            case"l":
            var sound7=new Audio("sound/sound-7.mp3");
            sound7.play();
            break;



            default:console.log();
        }
    

    });
}
