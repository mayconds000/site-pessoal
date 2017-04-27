$(function() {
  const $headerHome = $('#header-home')
  const $headerHomeH1 = $('#header-home > h1')[0]
  let $menuMobile = $('#menu-mobile')[0]
  const $menuHamb = $('.menu-hamb')
  console.log($menuMobile)


  /**
   * Funcion to call menu mobile
   */
  $menuHamb.click(function() {
   $menuMobile.style.display = 'block'
   setTimeout(function() {
      $menuMobile.style.right = '0'
   }, 1)
   
  })


  
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
})
