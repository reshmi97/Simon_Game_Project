var buttonColor=["red","blue","green","yellow"];
var gamepattern=[];
var userClickPattern=[];
var level=0;
var started=false;
//step-4
//document.querySelector(".btn").click(function(){//.addEventListener("click",function(){
$(".btn").click(function(){
   var userChosenColor=$(this).attr("id");//ERROR BTN-> ID, THIS-> $(THIS)
       // var userChosenColor=this.attr("btn");
        userClickPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor); 
        checkAnswer(userClickPattern.length-1);    
});        

//});
//step-7
//document.addEventListener("keypress",nextSequence());

// ERROR IN BELOW FUN
$(document).keypress(function(){
        if(!started){
                $("#level-title").text("Level "+level);
                nextSequence();
                started=true;
        }
});
//step-2/3
function nextSequence(){
        userClickPattern=[];
        level++;
        //step 7
        //document.querySelector("h1").innerHTML("LEVEL"+level);
        $("#level-title").text("Level "+ level);
        //step 2/3
        var randomNumber=Math.floor(Math.random()*4);
        var randomChosenColor=buttonColor[randomNumber];
        gamepattern.push(randomChosenColor);
        $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);//CHECK
        // var audio=new Audio("sounds/"+randomChosenColor+".mp3");//ERROR
        // audio.play();
        playSound(randomChosenColor);
}
//step-5
function playSound(name){
        var audio=new Audio("sounds/"+name+".mp3");
        audio.play();

}
//step -6
function animatePress(currentColor){
        // document.querySelector("#"+currentColor).addClass("pressed");//ERROR ADD-> ADDCLASS
        $("#"+currentColor).addClass("pressed");
        setTimeout(function(){
                $("#"+currentColor).removeClass("pressed");
                },100);//ERROR REMOVE-> REMOVECLASS, no need to write classList earlier add and remove fun.
}

//step - 8
function checkAnswer(currentLevel){
        if(gamepattern[currentLevel]===userClickPattern[currentLevel]){
                console.log("sucess");
                if(userClickPattern.length===gamepattern.length){
                        setTimeout(function(){
                                nextSequence();
                        },1000);
                }
        }
        else{
                console.log("wrong");
                playSound("wrong");
                $("body").addClass("game-over");
                setTimeout(function(){
                        $("body").removeClass("game-over");    
                },200);
                $("#level-title").text("Game Over, Press Any Key To Restart");
                startOver();
        }
}
//step 10
function startOver(){
        level=0;
        gamepattern=[];
        started=false;
}










