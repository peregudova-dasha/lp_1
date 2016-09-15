$(document).ready(function(){
  // menu item
  /*$("li").mouseenter(function(){
    $(this).find(".hover").animate({
      "width": "100%",
      "height": "5px",
    })
  })
  
  $(".link").mouseleave(function(){
    $(this).find(".hover").animate({
      "width": "0px",
      "height": "5px",
    })
  }) */
  $("li").hover(function(){
      $(this).find(".hover").stop().animate({
      "width": "100%",
      "height": "5px",
    })
    },
   function(){
       $(this).find(".hover").stop().animate({
      "width": "0px",
      "height": "5px",
    })
    }
    
  )
  
  //menu item END
  
  // button 1
  
  $(".button").hover(function() {
     $(this).stop().animate({backgroundColor:'#514135', color: "#000"}, 300);
        }, function () {
        $(this).stop().animate({backgroundColor:'#221B16'}, 300);
    
    });
  
  /// button 1 END
  
  // img description 

  
$("#block6 .on").hover(function(){
  $(this).find(".desc").stop().fadeIn()
}, 
   function(){
  $(this).find(".desc").stop().fadeOut()
 
})   



  // img description END

/// button 2
$(".button2").hover(function() {        
  $(this).stop().animate(
    {backgroundColor:'#fff'}, 300).find("a").stop().animate(
    {color:'#303030'}, 300);
        }, function () {
        $(this).stop().animate({backgroundColor:'#303030'}, 300).find("a").stop().animate(
    {color:'#fff'}, 300);
    
    });
  
  /// button 2 END
  
  /// button 3
$(".button3").hover(function() {        
  $(this).stop().animate(
    {backgroundColor:'#7b6c63'}, 300).find("a").stop().animate(
    {color:'#f5f5f5'}, 300);
        }, function () {
        $(this).stop().animate({backgroundColor:'#f5f5f5'}, 300).find("a").stop().animate(
    {color:'#7b6c63'}, 300);
    
    });
  
  /// button 3 END
  
  
  // social
  $(".img_black").hover(function(){
    $(this).find(".black").fadeIn().find(".social").fadeIn();
    
  }, function(){
    $(this).find(".black").fadeOut().find(".social").fadeOut();
    
  })
  
  
  $(".img_black .black .social a").hover(function(){
    $(this).find("img").animate({"width": "45px"})
    
  }, function(){
$(this).find("img").animate({"width": "40px"})
    
  })
  
  
  //social END
    
  // name
  
  $(".name").hover(function(){
    $(this).stop().css("border", "1px solid black")}, function(){
     $(this).stop().css("border", "1px solid grey")
  })
 //name END
  
  //button3
  $("#button3").hover(function(){
    $(this).stop().animate({backgroundColor: "#8E6750"},300)}, function(){$(this).stop().animate({backgroundColor: "#7b6c63"},300)
    });
   
  
  //button4 END
  
    //button3
  $(".button4").hover(function(){
    $(this).stop().animate({backgroundColor: "#f5f5f5"},300).find("a").animate({color: "#303030"},300)}, function(){$(this).stop().animate({backgroundColor: "#303030"},300).find("a").animate({color: "#f5f5f5"},300)
    });
   
  
  //button4 END
  
})
