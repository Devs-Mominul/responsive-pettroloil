$('.banner-slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:500,
    arrows:false,
  });
  
  
  // modal section

  // $(document).ready(function (){
  //   $(".lightbox-trigger").click(function(e){
  //     e.preventDefault();
  //     var img=$(this).attr('href');
  //     $(".lightbox-content img").attr("src",img);
  //     $(".lightbox").fadeIn(500);
  //   })
  //   $(".lightbox").click(function(){
  //     $(".lightbox").fadeOut(500);
  
  //   })
  // })
  $(document).ready(function(){
    $(".img-trigger").click(function(e){
      e.preventDefault();
      var ami=$(this).attr('href')
      $(".big-modal-img img").attr("src",ami);
      $(".big-modal-img").fadeIn(500)
    })
    
  })
  $(document).ready(function(){
    $(".big-modal-img").click(function(){
      $(".big-modal-img").fadeOut(500)
    })
  })
  
  // var modal=document.getElementById("big-modals");
  // var img=document.getElementById("big-modal");
  // var ones=document.getElementById("one")
  
  //  function minar(){
  //   modal.style.display="block";
  //   img.src=one.src;
  
  //  }
  //  window.addEventListener("click",function(event){
  //   if(event.target==modal){
  //     modal.style.display="none";
  //   }
  //  })
  
  
  
   window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     
      document.getElementById("navbars").style.top = "0";
      document.getElementById("navbars").classList.add("navigation");
    } else {
      
    
      document.getElementById("navbars").classList.remove("navigation");
    }
  
  } 
  var mominul=document.getElementById("preload");
  
    mominul.style.display="none";
  
    $(window).scroll(function(){
        var minar=$(this).scrollTop();
        if(minar > 20){
          $(".back_2-top").fadeIn()
        }
        else{
          $(".back_2-top").fadeOut()
        }
      })
   
   
      $(document).ready(function(){
        $(".back_2-top").click(function(){
          $("html , body").animate({
            scrollTop:0,
          },1000)
        })
      })