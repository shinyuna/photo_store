var Init = new Init();
Init.Init();


function Init(){
    this.Init = function(){
       Init.event();
       Init.set();
    }
    this.event = function(){
        $(window).resize(function(){
           Init.set();
        })
    }
    this.set = function(){
        var number = parseInt($("#content").width()/275); 
//        var content_left = $("#content").width()/number;
        var content_left = 275;
        var con_haf = ($("#content").width()-(number*275))/2; // 컨텐트의 여백의 반
        console.log(con_haf);
        console.log(number);
        var cnt = 0;
        var top_arr = {"0" : 0, "1" : 0, "2" : 0, "3" : 0};
        //console.log(top_arr[0]);
        
        $(".card").each(function(e){ 
            if(e >= number){
                var rest = e%number;
                var temp = $(".card").eq(e-number).height();
                top_arr[rest] = top_arr[rest] + temp;
               // console.log(top_arr);
                $(this).css({"top":top_arr[rest]});
            }else{
                $(this).css({"top":0});
            }
            $(this).stop().css({"left":content_left*cnt + con_haf});
            cnt++;
            cnt == number ? cnt = 0 : "";
        });
    }
}

