$(function() {
    $(window).scroll(function() {
        var top=$(window).scrollTop();

        if(top>0){
            $('#header').addClass('inverted');
        }
        else
            $('#header').removeClass('inverted');
    });
    //$(window).trigger('scroll');
    
    var dpFrom=$('#from').datepicker({
        dateFormat:'yy-mm-dd',
        minDate:0,
        minDate:0,
        onSelect:function(){
            dpTo.datepicker('option','minDate',dpFrom.datepicker('getDate'));
        }
    });
    dpFrom.datepicker('setDate',new Date());

    var dpTo=$('#to').datepicker({
        dateFormat:'yy-mm-dd',
        minDate:0  
    });
    dpTo.datepicker('setDate',new Date());
});

