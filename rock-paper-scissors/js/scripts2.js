var SCISSORS='가위';
var ROCK='바위';
var PAPER='보';
// '가위'버튼 클릭 핸들러
function onScissorsClick() {
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
function onRockClick() {
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
function onPaperClick() {
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
    if(comInput===SCISSORS){
        alert('컴퓨터:'+comInput+'--컴퓨터에게 짐');
    }
    else if(comInput===ROCK){
        alert('컴퓨터:'+comInput+'--컴퓨터에게 이김');
    }
    else{
        alert('컴퓨터:'+comInput+'--컴퓨터와 비김');
    }
}