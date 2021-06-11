$('.aside_drop_btn').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.aside_drop_btn').each(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
    }
});

$('#nav_toggle').click(function () {
    $(this).toggleClass('active');
    $('.top_nav').toggleClass('active');
    $('.content_wrap').toggleClass('active');
    $('#aside').toggleClass('active');
});



/* dropdown start-----------------*/
var drop_container = document.querySelectorAll('.drop_container');
var drop = document.querySelectorAll('.drop_container .drop');
for (var i = 0; i < drop.length; i++) {
	
	drop[i].addEventListener('click', function(){
		if (this.parentElement.classList.contains('active') == true) {
			this.parentElement.classList.remove('active');
		} 
		else{
			for (var i = 0; i < drop_container.length; i++) {
				drop_container[i].classList.remove('active');
			}
			this.parentElement.classList.add('active');
		}
	});
}
window.addEventListener('click', function(event){
	if (!event.target.matches('.drop')) {
		for(var i = 0; i < drop_container.length; i++){
			var rmv = drop_container[i];
			if (rmv.classList.contains('active')) {
		        rmv.classList.remove('active');
		      }
		    drop_container[i].classList.remove('active');
		}
	}
});
// -------------------------
/* dropdown end-----------------*/



// Waves effect
	
Waves.attach('.wev_effect');
Waves.init();