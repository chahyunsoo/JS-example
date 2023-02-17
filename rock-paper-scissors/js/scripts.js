var SCISSORS='가위';
var ROCK='바위';
var PAPER='보';
var userInput=prompt("가위,바위,보!");
if(userInput !==SCISSORS && userInput !==ROCK && userInput !==PAPER){
    alert('가위,바위,보 중 하나를 입력해야 해요~~^^');
}
else {
var comInput;
var random=Math.random();
if(random<0.33){
    comInput=SCISSORS;
}
else if(random>=0.33 && random<0.66){
    comInput=ROCK;
}
else {
    comInput=PAPER;
}
if(userInput===SCISSORS){
    if(comInput===SCISSORS){
        alert('컴퓨터:'+comInput+'--컴퓨터와 비김');
    }
    else if(comInput===ROCK){
        alert('컴퓨터:'+comInput+'--컴퓨터에게 짐');
    }
    else{
        alert('컴퓨터:'+comInput+'--컴퓨터에게 이김');
    }
}
else if(userInput===ROCK){
    if(comInput===SCISSORS){
        alert('컴퓨터:'+comInput+'--컴퓨터에게 이김');
    }
    else if(comInput===ROCK){
        alert('컴퓨터:'+comInput+'--컴퓨터와 비김');
    }
    else{
        alert('컴퓨터:'+comInput+'--컴퓨터에게 짐');
    }
}
else{
    if(comInput===SCISSORS){
        alert('컴퓨터:'+comInput+'--컴퓨터에게 짐');
    }
    else if(comInput===ROCK){
        alert('컴퓨터:'+comInput+'--컴퓨터에게 이김');
    }
    else{
        alert('컴퓨터:'+comInput+'--컴퓨터에게 비김');
    }
}
}
