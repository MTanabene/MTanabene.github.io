
$(document).ready(function(){
  var link =$('.topnav a');
  link.click(function(e){
   e.preventDefault();
    $('body,html').animate({
     scrollTop: $(this.hash).offset().top-80
    },2000)
  });
  $(window).scroll(function(){
    var location =$(this).scrollTop();
    link.each(function(){
      var sectionpose=$(this.hash).offset().top-90;
      if (sectionpose<= location)
        {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(this).parent().fadeIn("slow");
        }
      })
  })
});

window.onscroll = function() {myFunction()};
// Get the navbars
var navbar = document.getElementById("navbar");
var social = document.getElementById("social");
var contact = document.getElementById("C");
// Get the offset position of the navbars
var sticky = navbar.offsetTop;
var posc= contact.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navbar-fixed-top")
  } else {
    navbar.classList.remove("navbar-fixed-top");
  }
	 if (window.pageYOffset >= posc-400) {
		 social.classList.add("social")
  } else {
		social.classList.remove("social")
  }
}
