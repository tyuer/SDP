var scrollPosition = $(window).scrollTop();
//container1
if(scrollPosition < $(window).height()){
  setTimeout(function(){
    $("#close").animate({opacity:'1'},"slow");
  }, 1500);
}else{
  $(window).scroll(function() {
    scrollPosition = $(window).scrollTop();
    if (scrollPosition >= $('#container1').offset().top && scrollPosition < $('#container2').offset().top) {
      setTimeout(function(){
        $("#close").animate({opacity:'1'},"slow");
      }, 1500);
    }
  })
}
$(".picinner").slideDown("slow");

//container2
$('#container2').css("height", $(window).height() + $('.bg2inner').height()*1.3);
//container3
$(function() {
  $("#img1").draggable({
    //containment: "#container3", 
    scroll: false
  });
  $("#img2").draggable({
    scroll: false
  });
  $("#img3").draggable({
    scroll: false
  });
  $("#img4").draggable({
    scroll: false
  });
  $("#img5").draggable({
    scroll: false
  });
  $("#img6").draggable({
    scroll: false
  });
  $("#img7").draggable({
    scroll: false
  });
  $("#img8").draggable({
    scroll: false
  });
  $("#img9").draggable({
    scroll: false
  });
  $("#img10").draggable({
    scroll: false
  });
});
//container4
$('#container4').css("height", $('.content4').height());
//container5
$('#container5').css("height", $('.content5').height());
$(".content5-1").hover(function() {
  $("#t1").hide();
  $("#c1").show();
}, function() {
  $("#t1").show();
  $("#c1").hide();
});
$(".content5-2").hover(function() {
  $("#t2").hide();
  $("#c22").show();
}, function() {
  $("#t2").show();
  $("#c22").hide();
});
$(".content5-3").hover(function() {
  $("#t3").hide();
  $("#c3").show();
}, function() {
  $("#t3").show();
  $("#c3").hide();
});
$(".content5-4").hover(function() {
  $("#t4").hide();
  $("#c4").show();
}, function() {
  $("#t4").show();
  $("#c4").hide();
});
//container7
$('#container7').css("height", $('.content7').height());
//container9
$('#container9').css("height", $('.bg9').height() * 2);

$(window).scroll(function() {
  scrollPosition = $(window).scrollTop();
  //console.log(scrollPosition);
  if (scrollPosition >= $('#container1').offset().top && scrollPosition < $('#container2').offset().top) {
    if($('#container1').height() - scrollPosition <= $(window).height()){
      $('#bg1').css('position', 'absolute');
      $('#bg1').css('bottom', '0');
      $('#close').css('position', 'absolute');
    }else{
      $('#bg1').css('position', 'fixed');
      $('#close').css('position', 'fixed');
    }
    $('.content21').css('position', 'absolute');
    $('.content21').css('bottom', '');
    $('.content21').css('top', '0');
    $('.content22').css('display', 'none');
  } else if (scrollPosition >= $('#container2').offset().top && scrollPosition < $('#container3').offset().top) {
    if( (scrollPosition - $('#container2').offset().top) < ( $('#container2').height() - $(window).height() )){
      $('.content21').css('position', 'fixed');
      $('.content22').css('display', 'block');
      $('.content22').css('position', 'fixed');
      
    }else{
      $('.content21').css('position', 'absolute');
      $('.content21').css('bottom', '0');
      $('.content21').css('top', '');

      $('.content22').css('position', 'absolute');
      $('.content22').css('display', 'block');
      $('.content22').css('bottom', '0');
      $('.content22').css('top', '');
    }
  } else if (scrollPosition >= $('#container3').offset().top && scrollPosition < $('#container4').offset().top) {
    //console.log('3');
    $('.bg4').css('position', 'absolute');
      $('.bg4').css('bottom', '');
      $('.bg4').css('top', '0');
  } else if (scrollPosition >= $('#container4').offset().top && scrollPosition < $('#container5').offset().top) {
    if( (scrollPosition - $('#container4').offset().top) < ( $('#container4').height() - $(window).height() )){
      $('.bg4').css('position', 'fixed');
    }else{
      $('.bg4').css('position', 'absolute');
      $('.bg4').css('bottom', '0');
      $('.bg4').css('top', '');
    }

    $('.bg5').css('position', 'absolute');
      $('.bg5').css('bottom', '');
      $('.bg5').css('top', '0');
  } else if (scrollPosition >= $('#container5').offset().top && scrollPosition < $('#container6').offset().top) {
    if( (scrollPosition - $('#container5').offset().top) < ( $('#container5').height() - $(window).height() )){
      $('.bg5').css('position', 'fixed');
    }else{
      $('.bg5').css('position', 'absolute');
      $('.bg5').css('bottom', '0');
      $('.bg5').css('top', '');
    }

    $('.video-background').css('position', 'absolute');
    $('.video-background').css('bottom', '');
    $('.video-background').css('top', '0');
    $('.content6innner').css('position', 'absolute');
    $('.content6innner').css('bottom', '');
    $('.content6innner').css('top', '0');
    $(".content6-1").css('left',$(window).width());
  } else if (scrollPosition >= $('#container6').offset().top && scrollPosition < $('#container7').offset().top) {
    if( (scrollPosition - $('#container6').offset().top) < ( $('#container6').height() - $(window).height() )){
      $('.video-background').css('position', 'fixed');

      $('.content6innner').css('position', 'fixed');

      if( (scrollPosition - $('#container6').offset().top) < ( $(window).height() )){
        $("h1").css('margin-right',(scrollPosition - $('#container6').offset().top)/4 * 3);
        $(".content6-text").css('margin-right',(scrollPosition - $('#container6').offset().top)/4 * 3);

        $(".content6-1").css('left',($(window).width() - ((scrollPosition - $('#container6').offset().top)/4 * 3)));
        $(".content6-2").css('left',$(window).width());
        $(".content6-3").css('left',$(window).width());
      }else if((scrollPosition - $('#container6').offset().top) < 2 * $(window).height() && ((scrollPosition - $('#container6').offset().top) >= $(window).height())){
        $(".content6-2").css('left',($(window).width()  - ((scrollPosition - $(window).height() - $('#container6').offset().top)/4 * 3)));
        $(".content6-1").css('left',($(window).width() - ($(window).height()/4 * 3)));
        $(".content6-3").css('left',$(window).width());
      }else if((scrollPosition - $('#container6').offset().top) < 3 * $(window).height() && ((scrollPosition - $('#container6').offset().top) >= 2 * $(window).height())){
        $(".content6-3").css('left',($(window).width() - ((scrollPosition - $(window).height() * 2 - $('#container6').offset().top)/4 * 3)))
        $(".content6-1").css('left',($(window).width() - ($(window).height()/4 * 3)));
        $(".content6-2").css('left',($(window).width() - ($(window).height()/4 * 3)));
      }
      

    }else{
      $(".content6-3").css('left',($(window).width() - ($(window).height()/4 * 3)));
      $('.video-background').css('position', 'absolute');
      $('.video-background').css('bottom', '0');
      $('.video-background').css('top', '');

      $('.content6innner').css('position', 'absolute');
      $('.content6innner').css('bottom', '0');
      $('.content6innner').css('top', '');
    }

    $('.video-background2').css('position', 'absolute');
      $('.video-background2').css('bottom', '');
      $('.video-background2').css('top', '0');
  } else if (scrollPosition >= $('#container7').offset().top && scrollPosition < $('#container8').offset().top) {
    if( (scrollPosition - $('#container7').offset().top) < ( $('#container7').height() - $(window).height() )){
      $('.video-background2').css('position', 'fixed');
    }else{
      $('.video-background2').css('position', 'absolute');
      $('.video-background2').css('bottom', '0');
      $('.video-background2').css('top', '');
    }
  } else if (scrollPosition >= $('#container8').offset().top && scrollPosition < $('#container9').offset().top) {
      
    $('.content9').css('position', 'absolute');
      $('.content9').css('bottom', '');
      $('.content9').css('top', '0');
      
  }else if (scrollPosition >= $('#container9').offset().top && scrollPosition < $('#container10').offset().top) {
    if( (scrollPosition - $('#container9').offset().top) < ( $('#container9').height() - $(window).height() )){
      $('.content9').css('position', 'fixed');

      if( (scrollPosition - $('#container9').offset().top) > ( $('#container9').height() - $(window).height() * 2.3  ) ){
        $(".content9-1").show();
      }else{
        $(".content9-1").hide();
      }

      if( (scrollPosition - $('#container9').offset().top) > ( $('#container9').height() - $(window).height() * 2  ) ){
        $(".content9-2").show();
      }else{
        $(".content9-2").hide();
      }


      if( (scrollPosition - $('#container9').offset().top) > ( $('#container9').height() - $(window).height() * 1.8  ) ){
        $(".content9-3").show();
      }else{
        $(".content9-3").hide();
      }


    }else{
      $('.content9').css('position', 'absolute');
      $('.content9').css('bottom', '0');
      $('.content9').css('top', '');
    }

    $('.bg10').css('position', 'absolute');
    $('.bg10').css('bottom', '');
    $('.bg10').css('top', '0');
  }else if (scrollPosition >= $('#container10').offset().top) {
    $('.bg10').css('position', 'fixed');
  }

});

$("#c2").click(function(){
  $('html, body').animate({
    scrollTop: $('#container3').offset().top
  }, 1000);
});
$("#c6").click(function(){
  $('html, body').animate({
    scrollTop: $('#container7').offset().top
  }, 1000);
});

document.getElementById("closebutton").onclick = function(){
  document.getElementById("close").style.display = "none";
}


