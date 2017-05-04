$(function() {
  const $headerHome = $('#header-home')
  const $headerHomeH1 = $('#header-home > h1')[0]
  const $menuMobile = $('#menu-mobile')[0]
  const $menuHamb = $('.menu-hamb')
  const $menuClose = $('#menu-mobile').children()


  /**
   * Funcion to call and close menu mobile
   */

  function callMenuClick() {
    if( $menuMobile.style.display === "none" || $menuMobile.style.display === ""){
      $menuMobile.style.display = 'block'
      $menuClose.click(callMenuClose)
      setTimeout(function() {
          $menuMobile.style.right = '0'
      }, 100)
    } else {
      callMenuClose()
    }
  }

  function callMenuClose() {
      $menuMobile.style.right = '-2000px'
      setTimeout(() => {
      $menuMobile.style.display = 'none'
      }, 500)
  }

  $menuHamb.click(callMenuClick)
  console.log($menuHamb)
  


  
  /**
   * Functions with scroll
   */ 
  $(window).scroll(function() {
    $wScroll = $(this).scrollTop()
    
    if($wScroll > $headerHome.offset().top - 60 && $wScroll < $headerHome.height() + $headerHome.offset().top) {
      $headerHome.css('background-position', '0px '+($wScroll / 16) + 'px')
    }
  });


  /**
   * Functions with fade
   */
  const setTime = (elm, func, time) => {
    setTimeout(() => {
      fadeIn(elm)
      leftToRight(elm)
    }, time);
  }
  const fadeIn = (elm) => {
    elm.style.opacity = 1
  }

  const leftToRight = (elm) => {
    elm.style.marginLeft = 0
  }
  
  setTime($headerHomeH1, [fadeIn, leftToRight], 300)


  /**
   * Send Email
   */
  const $sendEmail = $('#sendEmail')
  $sendEmail.click(() => {
    let form = $('form')
    let formData =$('#form_envia_email').serialize()
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: formData,
      success: function(msg) {
        console.log(msg)
      }
    })
  })
})
