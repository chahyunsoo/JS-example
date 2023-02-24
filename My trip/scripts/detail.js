$(function(){
    var id=parseId(window.location.search);
    getDetail(id);

});
function getDetail(id){
    var url='https://javascript-basic.appspot.com/locationDetail';
    $.getJSON(url,{
        id:id
    },function(r){
        $('.detail-header-name').html(r.name);
        $('.detail-header-city-name').html(r.cityName);
        $('.detail-desc-text').html(r.desc);

        //showMarker(r.position.x,r.position.y);

        $('.btn-register').click(function(){
            var myTrips=Cookies.getJSON('MYTRIPS');

            if(!myTrips){
                myTrips=[];
            }
                myTrips.push({
                    id:id,
                    name:r.name,
                    cityName:r.cityName
                    //x:r.position.x,
                    //y:y.position
                });
                Cookies.set('MYTRIPS',myTrips);
                alert('여행지가 등록되었습니다');
        });
    });
}
function parseId(str){
    var s=str.substring(1);
    var args=s.split('&');
    
    for(var i=0; i<args.length; i++){
        var arg=args[i];
        var tokens=arg.split('=');
        if(tokens[0] ==='id'){
            return tokens[1];
        }
    }
    return null;
}

//이미지 갤러리 라이브러리 결제 issue

/* 
//구글 맵 api 

//여러 함수에서 지도를 다뤄야 하기 때문에 전역변수로 설정
var map; 

$(function(){
    showMap();
})

//지도 추가
function showMap(){
    map=new google.map.Maps(document.getElementById('map',
    {
        zoom:12,
        center:{
            lat:33.3617,
            lng:126.5292
        }
    });
}

//지도에 마커 추가하기--->google.maps.Marker() 함수 사용
function showMarker(lat,lng){
    var pos={
        lat:lat,
        lng:lng
    };
    new google.maps.Marker({
        position:pos;
        map:map
    });
    //panTo에 똑같이 위치를 인자로 넘겨서 마커 지도 정중아에 표시
    map.panTo(pos);
    }
*/