window.onload = function(){

   $('html, body').scrollTop(0);
   
    $('#nav1').click(function(){
        $('html, body').scrollTop(0);
        $("#menu_home").css({display:"block"});
        $("#menu_favorite, #menu_aboutme").css({display:"none"});
     });

     $('#nav2').click(function(){
        $('html, body').scrollTop(0);
        $("#menu_aboutme").css({display:"block"});
        $("#menu_favorite, #menu_home").css({display:"none"});
     });

     $('#nav3').click(function(){
        $('html, body').scrollTop(0);
        $("#menu_favorite").css({display:"block"});
        $("#menu_aboutme, #menu_home").css({display:"none"});
     });
     $('header h1').click(function(){
        $("#menu_home").css({display:"block"});
        $("#menu_favorite, #menu_aboutme").css({display:"none"});
     })
};