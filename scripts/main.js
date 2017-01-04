$(document).ready(function() {
    var open = $('#open');
    var close = $('#close');
    var menu = $('nav');
    
     close.hide();
     open.click(function(){
         menu.slideDown();
         open.hide();
         close.show();
         console.log("Open mobile nav");
      });

      close.click(function(){
        menu.slideUp();
        close.hide();
        open.show();
        console.log("Close mobile nav");
      });
    
    
    
    $(window).resize(function() {
    if( $(window).width() >= 600 ) {
      $("nav:hidden").show();
    }
  });
}); 