var list=[];
for(var i=1; i<=45; i++){
    list.push(i);
}
var result=[];
for(var i=0; i<6; i++){
var index=Math.floor(Math.random()*list.length);
var num=list[index];
list.splice(index,1);
result.push(num);
}

/*function compare(a,b){
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    return 0;
}
*/
/* 오름차순 정렬(b-a는 내림차순 정렬)
function compare(a.b){
    return a-b;   
}
*/

//result.sort(compare);
//result.sort((a,b) => a-b);  //화살표함수 이용

result.sort(function(a,b){
    return a-b;
}); //함수 구현체를 인자로 넘김

for(var i=0; i<6; i++){
    //document.write('<div class="ball">'+result[i]+'</div>');
    document.write('<span id="rad" class="ball">'+result[i]+'</span>');
}




 