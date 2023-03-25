$('.banner-slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:500,
    arrows:false,
  });
  
  
  // modal section
  var modal=document.getElementById("big-modals");
  var img=document.getElementById("big-modal");
  
   function minar(){
    modal.style.display="block";
    img.src=one.src;
  
   }
   window.addEventListener("click",function(event){
    if(event.target==modal){
      modal.style.display="none";
    }
   })
  
  
  
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
  
  