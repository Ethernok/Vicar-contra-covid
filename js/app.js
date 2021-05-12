$(document).ready(function(){
    $(".banner").css('background-color', 'white')
    
      
   


    $( function() {
        $( ".relative" ).draggable();
      } );
    $(".close-banner").on('click', ()=>{
    runEffect();
    $( ".banner" ).effect('clip',{}, 1000, ()=>{$('.relative').hide();});
    $( ".close-banner" ).effect('clip',{}, 1000, ()=>{$('.close-banner').hide();});
    })
})
function runEffect() {
      
    
    
    
  };
  