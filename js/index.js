$(document).ready(function(){

  /*
   *  animate login-box if invalide login
   */
  $('#incorrect').click(function(){      
      var duration = 80;
      var offset = 40;

      $('#login-box').animate({marginLeft:('-='+ offset)}, duration,function(){
           $(this).animate({marginLeft:('+=' + offset*2)}, duration, function(){
              $(this).animate({marginLeft:('-=' + offset*2)}, duration, function(){
                   $(this).animate({marginLeft:('+='+ offset)}, duration);
              });
           });
        });      
      });

    /*
     *  animate login-box for valid login
     */
    $('#correct').click(function(){
        var duration = 300;
        var offset = 80;
        $('#login-box').animate({'max-width':'480px', width:('+=' + offset), marginLeft:('-=' + offset/2),height:('+=' + offset), marginTop:('-=' + offset/2), opacity:0}, duration); 
    });
  
  /*
   *  position loginbox to center of browser window
   */
  $(window).resize(function(){
      $('#login-box').css({marginTop:($(window).innerHeight()/2 - $('#login-box').height()/2 )});
      $('#login-box').css({marginLeft:($(window).innerWidth()/2 - $('#login-box').width()/2 )});
  });
  
  $(window).resize();
  
   $('#refresh').click(function(){
     $('#login-box').css({opacity:1, height:'auto', width:'50%'});
     $(window).resize();
  });
});