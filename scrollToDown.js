$(function(){
    $(window).scroll(function(){
          var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
     if(scrollBottom > 100){$("#nowfooter").fadeIn();}
     else{$("#nowfooter").fadeOut();}
              $('#nowfooter')
   });
 });
