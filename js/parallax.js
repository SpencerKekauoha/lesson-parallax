$(window).scroll(function(){

//find the scroll and use this variable to move elements

  var winScroll = $(this).scrollTop();

// left branch moves out of view on the x-axis on scroll

  $('.left-branch').css({
      'transform': 'translate(-'+ winScroll /10 +'%, 0px)'
    });

// right branch moves out of view on the x-axis on scroll

  $('.right-branch').css({
      'transform': 'translate('+ winScroll /10 +'%, 0px)'
    });

// vader moves down on the y-axis on scroll

  $('.vader').css({
      'transform': 'translate(0px, '+ winScroll /10 +'%)'
    });

})
