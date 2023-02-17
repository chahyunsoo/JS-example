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
switch(userInput){
    case SCISSORS:
        switch(comInput){
            case SCISSORS:
                alert('컴퓨터'+comInput+'--컴퓨터와 비김');
                break;
            case ROCK:
                alert('컴퓨터'+comInput+'--컴퓨터에게 짐');
                break;
            default:
                alert('컴퓨터'+comInput+'--컴퓨터에게 이김');
                break;
        }
        break;
    case ROCK:
        switch(comInput){
            case SCISSORS:
                alert('컴퓨터'+comInput+'--컴퓨터에게 이김');
                break;
            case ROCK:
                alert('컴퓨터'+comInput+'--컴퓨터와 비김');
                break;
            default:
                alert('컴퓨터'+comInput+'--컴퓨터에게 짐');
                break;
        }
        break;
    default:
        switch(comInput){
            case SCISSORS:
                alert('컴퓨터'+comInput+'--컴퓨터에게 짐');
                break;
            case ROCK:
                alert('컴퓨터'+comInput+'--컴퓨터에게 이김');
                break;
            default:
                alert('컴퓨터'+comInput+'--컴퓨터에게 비김');
                break;
        }
        break;
    }
}
