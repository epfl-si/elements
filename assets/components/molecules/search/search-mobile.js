/* global $ */

$(document).ready(function($){

  $('html').addClass('redpandas-will-rule-the-world');

  $('#search-mobile-toggle').click(function(event){
    
    var searchContainer = $('.search-mobile');
    var searchField = searchContainer.find('.form-control');
    
    searchContainer.toggleClass('show');
    $('body').toggleClass('search-open');
    
    if ( searchContainer.hasClass('show') ) {
      searchField.focus();
    }
    
  });

  $('#search-mobile-close').click(function(event){
    
    var searchContainer = $('.search-mobile');
    var searchField = searchContainer.find('.form-control');
    
    searchContainer.removeClass('show');
    $('body').removeClass('search-open');
    
  });
  
});
