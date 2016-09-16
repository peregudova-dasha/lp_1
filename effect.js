

  
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
  



(function ($){

    $.fn.bekeyProgressbar = function(options){

        options = $.extend({
        	animate     : true,
          animateText : true
        }, options);

        var $this = $(this);
      
        var $progressBar = $this;
        var $progressCount = $progressBar.find('.ProgressBar-percentage--count');
        var $circle = $progressBar.find('.ProgressBar-circle');
        var percentageProgress = $progressBar.attr('data-progress');
        var percentageRemaining = (100 - percentageProgress);
        var percentageText = $progressCount.parent().attr('data-progress');
      
        //Calcule la circonférence du cercle
        var radius = $circle.attr('r');
        var diameter = radius * 2;
        var circumference = Math.round(Math.PI * diameter);

        //Calcule le pourcentage d'avancement
        var percentage =  circumference * percentageRemaining / 100;

        $circle.css({
          'stroke-dasharray' : circumference,
          'stroke-dashoffset' : percentage
        })
        
        if(options.animate === true){
          $circle.css({
            'stroke-dashoffset' : circumference
          }).animate({
            'stroke-dashoffset' : percentage
          }, 3000 )
        }
        
        //Animation du texte (pourcentage)
        if(options.animateText == true){
 
          $({ Counter: 0 }).animate(
            { Counter: percentageText },
            { duration: 3000,
             step: function () {
               $progressCount.text( Math.ceil(this.Counter) + '%');
             }
            });

        }else{
          $progressCount.text( percentageText + '%');
        }
      
    };

})(jQuery);

$(document).ready(function(){
  
  $('.ProgressBar--animateNone').bekeyProgressbar({
    animate : false,
    animateText : false
  });
  
  $('.ProgressBar--animateCircle').bekeyProgressbar({
    animate : true,
    animateText : false
  });
  
  $('.ProgressBar--animateText').bekeyProgressbar({
    animate : false,
    animateText : true
  });
  
  $('.ProgressBar--animateAll').bekeyProgressbar();
  
})
