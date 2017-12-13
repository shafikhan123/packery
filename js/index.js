// external js: masonry.pkgd.js

var $grid=$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true
});

$grid.on( 'click', '.grid-item', function() {
  // change size of item via class
  $('.grid-item').removeClass('grid-item--gigante');
  $( this ).toggleClass('grid-item--gigante');
  // trigger layout
  $grid.masonry();
});


jQuery(document).ready(function(){
  
 jQuery('.close').on('click',function(){
   $('.grid-item').removeClass('grid-item--gigante');
  $grid.masonry(); 
  return false;
 });
  
});