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
    shotsleft:3
};

function onComputerShoot(){
    //게임오버이면 리턴
    if (game.shotsLeft === 0)
        return; 
    if(!game.isComputerTurn)
        return;
    AI();
    //var $textElem=$('#text');
    //var comScoreElem=document.getElementById('computer-score');
    
    var shootType=Math.random() <0.5 ? 2 : 3;
        if(Math.random()<computer['percent'+shootType]){
            showText('컴퓨터가 '+shootType+'점슛을 성공시킴');
            updateComputerscore(shootType);
        }else
            showText('컴퓨터가 '+shootType+'점슛을 실패함');
        
    game.isComputerTurn=false;
    disabledComputerButtons(true);
    disabledUserButtons(false);
}

function onUserShoot(shootType){
    if (game.shotsLeft === 0)
        return;
    if(game.isComputerTurn)
    return;
    
//var $textElem=$('#text');
//var $comScroeElem=$('#computer-score');

        if(Math.random()<user['percent'+shootType]){
            showText('넌 '+shootType+'점슛을 성공시킴');
            updateUserscore(shootType);
        }else
            showText('넌 '+shootType+'점슛을 실패함');
        
    
    game.isComputerTurn=true;
    disabledComputerButtons(false);
    disabledUserButtons(true);
    
    game.shotsleft--;

    var $shotsleftElem=$('#shots-left');
    $shotsleftElem.html(game.shotsleft);
    //남은점수가 0점일때...  
    if(game.shotsleft===0){
        //승리 조건 비교
        if(user.score>computer.score){
            showText('너가 이겼어!');
        }
        else if(user.score<computer.score){
            showText('너가 졌다ㅋㅋ');
        }
        else
            $textElem.html('둘이 비겼네?');
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
    var $textElem=$('#text');
    //$textElem.html(sc);
    //console.log('$textElem',$textElem);
    //$textElem.fadeOut();
    //$textElem.html(sc);
    //$textElem.fadeIn();
    
   //fadeOut(),fadeIn()은 '비동기 함수' --->그래서 둘이 겹치게 나타남
   //콜백함수를 인자로 받아 설계
    $textElem.fadeOut(300,function() {
        $textElem.html(sc);
        $textElem.fadeIn(100);
    });
}
function updateComputerscore(score){
    computer.score+=score;
    var $comScoreElem=$('#computer-score');
    //$comScoreElem.html(computer.score) //점수 바로바로 변경
    //아래는 플러그인을 사용하여 점수에 애니메이션 효과 적용
    $comScoreElem.animateNumber({
        number:computer.score
    });
}
function updateUserscore(score){
    user.score+=score;
    var $userScoreElem=$('#user-score');
    //$userScoreElem.html(user.score);
    $userScoreElem.animateNumber({
        number:user.score
    });

}
function disabledComputerButtons(flag){
    /*var computerButtons=document.getElementsByClassName('btn-computer');
    for(var i=0; i<computerButtons.length; i++){
        computerButtons[i].disabled=flag;
    }*/
    $('.btn-computer').prop('disabled',flag);
}
function disabledUserButtons(flag){
    /*var userButtons=document.getElementsByClassName('btn-user');
    for(var i=0; i<userButtons.length; i++){
        userButtons[i].disabled=flag;
    }*/
    $('.btn-user').prop('disabled',flag);
}

//확률 조작 기능
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

$(function(){
    showText(3);    

setTimeout(function(){
    showText(2);

    setTimeout(function(){
        showText(1);

    setTimeout(function(){
            showText('컴퓨터부터 시작합니다');
            disabledComputerButtons(false);
        },1000);
    },1000);
},1000);
});



