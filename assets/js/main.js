(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  let sideBtn = document.querySelector('.side_btn')
  let sideBar = document.querySelector('.side_bar')

  sideBtn.addEventListener('click', (e) => {
      e.preventDefault()
      sideBar.classList.toggle('active')
  })


  function MenuBtns() {
    let AllBtns = document.querySelectorAll('.setting_icon');
    if (AllBtns.length > 0) {
        AllBtns.forEach(Btn => {
            Btn.addEventListener('click', (e) => {
                Btn.parentElement.classList.toggle('show')
            })
        }) 
    }
  }
  MenuBtns()

  $('select').niceSelect();
 


  $(".cal_btn").click(function() {
    $(".myCalendar").toggleClass("active")
})

$(".rang_btn").click(function() {
    $(".range__wrp").toggleClass("active")
})

$(function() {
  $( "#datepicker-13" ).datepicker();
});

$(".Search_btn").click(function() {
  $(".src_popup").addClass("active")
})
$(".bg_src").click(function() {
  $(".src_popup").removeClass("active")
})


$(".tb__action__icon a").click(function(e) {
  e.preventDefault()
  $(this).toggleClass("active")
})


})(jQuery);
