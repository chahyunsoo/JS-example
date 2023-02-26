//지도 표시 로직
// var map; 

// $(function(){
//     showMap();
// })

// //지도 추가
// function showMap(){
//     map=new google.map.Maps(document.getElementById('map'),
//     {
//         zoom:12,
//         center:{
//             lat:33.3617,
//             lng:126.5292
//         }
//     });
// }

$(function() {
    var myTrips=Cookies.getJSON('MYTRIPS');

    if(!myTrips){
        myTrips=[];
    }

    //showMap();
    generateMyTripList(myTrips);
    
});
function generateMyTripList(list){
    var $list=$('#mytrip-list');

    for(var i=0; i<list.length; i++){
        var myTrip=list[i];

        var $item=$('#mytrip-item-template').clone().removeAttr('id');
        $item.find('.item-name').html(myTrip.name)
        $item.find('.item-city-name').html(myTrip.cityName)
        $list.append($item);

        //목록에서 여행지 제거하기
        $item.find('.item-remove').click(function(){
            var $elem=$(this).closest('.mytrip-item');
            $elem.remove();
        });
        

    }
}