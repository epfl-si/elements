/* global $ */

export default () => {
  
  $('.btn-collapse').click(function(){
    
    const parent = $(this).parent(".line");
    const toggleIcon = $(this).find("span")
    
    parent.toggleClass('open');
    toggleIcon.toggleClass('show');
  });
  
};
  