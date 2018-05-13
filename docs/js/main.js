$(document).ready(function() {

	/* Call plugins hrere ...*/
 $(".owl-carousel").owlCarousel({
	items:1,
	nav:true,
	loop:true,
	autoplay:5000,
	navText:["<img src=\"img/arrow-carousel/arrow-left.png\">","<img src=\"img/arrow-carousel/arrow-right.png\">"]
});

//filter
var mixer = mixitup('#product-class');

//filter click
 	var button= $('.filter-block__button');
	var buttonActive ='filter-block__button--active';

	$(button).on("click", function () {
		$(button).removeClass(buttonActive);
		$(this).toggleClass(buttonActive);
	});
	
    // Создаем переменые для кнопки и для меню
	var pull = $("#navigation-pull");
	var nav = $("#nav__menu-list");

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

        // Открываем/Скрываем меню
		$(nav).slideToggle();
	});
			$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && nav.is(':hidden')) {
		    nav.removeAttr('style');
		}
	});

		//Вызов библиотеки wow.js
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       80,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
});
