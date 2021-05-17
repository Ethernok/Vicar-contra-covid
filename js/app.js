$(document).ready(function () {



  //-------------Animaciones de banner------------------
  $(".banner").css('background-color', 'white')


  // Intervalo de colores

  // Se hace el banner que se pueda mover a través de la página
  $(function () {
    $(".relative").draggable();
  });

  $(".close-banner").on('click', () => {

    $(".banner").effect('clip', {}, 1000, () => {
      $('.relative').hide();
    });
    $(".close-banner").effect('clip', {}, 1000);


  })

  //----------------------Fin animaciones banner-------------------------

  //-------------------Faq---------------------------
  $("#faq-questions").accordion({
    collapsible: true,
    heightStyle: "content"
  });
  var faqActive = true;
  $('#faq-button').on('click', () => {
    faqActive = !faqActive;
    if (faqActive == false) {
      $(".ui-accordion-content").show();
    } else {
      $(".ui-accordion-content").hide();
    }
    $(".ui-accordion .ui-accordion-content").css('padding', 0)

  })
  //------------------------FIN Faq--------------------------

  //----------------------Modal-------------------------------

  $('.item').on('click', (ev) => {
    if (ev.target.src != undefined) {
      $('.overlay-img').remove();
      $('.modal-dialog').prepend(`
      <img class="overlay-img" src="${ev.target.src}">
      `)
      $('#modal-img').toggleClass('fade');
    }

    console.log(ev.target.src)
    console.log(ev)
  })
  //-----------------Zoom del modal-----------------------
  $("#zoom-in").on('click', () => {
    $('.overlay-img').css({width:"+=80px" })
    console.log($('.overlay-img').css('width'))

  })
  $("#zoom-out").on('click', () => {
    $('.overlay-img').css({width:"-=80px" })
    

  })
})