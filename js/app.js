$(document).ready(function(){
   
    //-----------------Zoom del carrusel-----------------------
    $("#zoom-in").on('click', (e) =>{
        $('#myCarousel').css('transform', 'scale(1.5)')
        $('.item-active img').css('max-height', '850px')
        $('.item-active img').css('width', '90%')
        console.log($('.item-active img').css('width'))
        
    })
    $("#zoom-out").on('click', (e) =>{
        $('#myCarousel').css('transform', 'scale(1.0)')
        $('.item-active img').css('width', '65%')
        $('.item-active img').css('max-height', '500px')
        console.log(e.target)
        
    })

    

   //-------------Animaciones de banner------------------
    $(".banner").css('background-color', 'white')

    $( function() {
        $( ".relative" ).draggable();
      } );
    
    $(".close-banner").on('click', ()=>{
    
    $( ".banner" ).effect('clip',{}, 1000, ()=>{$('.relative').hide();});
    $( ".close-banner" ).effect('clip',{}, 1000);

   
    }) 

    //----------------------Fin animaciones banner-------------------------

    //-------------------Faq---------------------------
    $( "#faq-questions" ).accordion({
        collapsible: true,
        heightStyle: "content"
      });
      var faqActive = true;
      $('#faq-button').on('click', ()=>{
        faqActive = !faqActive;
        if(faqActive == false){
          $(".ui-accordion-content").show();
        }else{
          $(".ui-accordion-content").hide();
        }
        $(".ui-accordion .ui-accordion-content").css('padding', 0)
        
      })
})

  