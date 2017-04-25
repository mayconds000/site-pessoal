$(function() {
  let $headerHome = $('#header-home')
  const $headerHomeH1 = $('#header-home > h1')[0]

  
  /**
   * Functions with scroll
   */ 
  $(window).scroll(function() {
    $wScroll = $(this).scrollTop()
    
    if($wScroll > $headerHome.offset().top - 60 && $wScroll < $headerHome.height() + $headerHome.offset().top) {
      $headerHome.css('transform', 'scale(' + ($wScroll / 5800 + 1) + ')')
      
    }
  });


  /**
   * Functions with fade
   */
  const setTime = (elm, func, time) => {
    console.log(func)
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
  
  setTime($headerHomeH1, [fadeIn, leftToRight], 1000)
})
