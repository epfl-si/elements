/* global $ */

$(document).ready(function($){
  
  $(".line .btn-collapse").click(function(){
    $(this).parent(".line").toggleClass('open');
    $(this).find("span").toggleClass('show');
  });

  $('html').addClass('testjs');
  
});
