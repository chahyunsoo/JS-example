/*var comScore=0; //컴퓨터 점수
var comPercent2=0.5; 
var comPercent3=0.33;

var userScore=0; //사용자 점수
var userPercent2=0.5;
var userPercent3=0.33;

var isComputerTurn=true; //차례 바꾸기 위해
var shotsleft=15; //몇 번 남았는지 
*/
//전역변수를 오브젝트로 바꿔서 표현(8개에서 3개로 줄음! & 그룹핑)
var computer={
    score:0,
    percent2:0.5,
    percent3:0.33
};
var user={
    score:0,
    percent2:0.5,
    percent3:0.33
};
var game={
    isComputerTurn:true,
    shotsleft:15
};
function onComputerShoot(){
    if(!game.isComputerTurn)
        return;
    AI();
    var textElem=document.getElementById('text');
    var comScoreElem=document.getElementById('computer-score');
    var shootType=Math.random() <0.5 ? 2 : 3;
        if(Math.random()<computer['percent'+shootType]){
            showText('컴퓨터가 '+shootType+'점슛을 성공시킴');
            updateComputerscore(shootType);
           
        }else{
            showText('컴퓨터가 '+shootType+'점슛을 실패함');
        }
    game.isComputerTurn=false;
    disabledComputerButtons(true);
    disabledUserButtons(false);
}
function onUserShoot(shootType){
    if(game.isComputerTurn)
    return;
    
    var textElem=document.getElementById('text');
    var userScoreElem=document.getElementById('user-score');
        if(Math.random()<user['percent'+shootType]){
            textElem.innerHTML='넌 '+shootType+'점슛을 성공시킴';
            updateUserscore(shootType);
        }else{
            textElem.innerHTML='넌 '+shootType+'점슛을 실패함';
        }
    
    game.isComputerTurn=true;
    disabledComputerButtons(false);
    disabledUserButtons(true);
    
    game.shotsleft--;
    var shotsleftElem=document.getElementById('shots-left');
    shotsleftElem.innerHTML=game.shotsleft;
    //남은점수가 0점일때...  
    if(game.shotsleft===0){
        if(user.score>computer.score){
            textElem.innerHTML='너가 이겼어!';
        }
        else if(user.score<computer.score){
            textElem.innerHTML='너가 졌다ㅋㅋ';
        }
        else
        textElem.innerHTML='둘이 비겼네?';
        //밑에거는 마지막에 비활성화/활성화 리펙토링 안한 코드
        /*var computerButtons=document.getElementsByClassName('btn-computer');
        for(var i=0; i<computerButtons.length; i++){
            computerButtons[i].disabled=true;
        }
        var computerButtons=document.getElementsByClassName('btn-user');
        for(var i=0; i<userButtons.length; i++){
            userButtons[i].disabled=true;
        }*/
        disabledComputerButtons(true);
        disabledUserButtons(true); 
    }
}

//리펙토링 위한 함수 생성
function showText(sc){
    var textElem=document.getElementById('text');
    textElem.innerHTML=sc;
}
function updateComputerscore(score){
    var comScoreElem=document.getElementById('computer-score');
    computer.score+=score;
    comScoreElem.innerHTML=computer.score;
}
function updateUserscore(score){
    var userScoreElem=document.getElementById('user-score');
    user.score+=score;
    userScoreElem.innerHTML=user.score;
}
function disabledComputerButtons(flag){
    var computerButtons=document.getElementsByClassName('btn-computer');
    for(var i=0; i<computerButtons.length; i++){
        computerButtons[i].disabled=flag;
    }
}
function disabledUserButtons(flag){
    var userButtons=document.getElementsByClassName('btn-user');
    for(var i=0; i<userButtons.length; i++){
        userButtons[i].disabled=flag;
    }
}
function AI(){
    var dif=user.score-computer.score;
    if(dif>=10){
        computer.percent2=0.7;
        computer.percent3=0.43;
    }
    else if(dif>=6){
        computer.percent2=0.6;
        computer.percent3=0.38;
        console.log(dif); //그냥 흐름 확인하려고 넣은 것임
    }
    else if(dif<=-10){
        computer.percent2=0.3;
        computer.percent3=0.23;
    }
    else if(dif<=-6){
        computer.percent2=0.4;
        computer.percent3=0.28;
    }
}
showText(3);

