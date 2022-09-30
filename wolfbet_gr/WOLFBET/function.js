$(document).ready(function(){
    $(".menu").click(function(){
        $(".menu-list").toggleClass("active");
    });
 });

 $(document).ready(function(){
    $(".metodo").click(function(){
        $(".metodo").removeClass("selected");
        $(this).addClass("selected");
    });
 });