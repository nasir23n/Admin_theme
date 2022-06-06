/**
 ** Modal function start
 **/
(function (global, mainFunc) {
    "use strict";
    mainFunc(global);
})(window || this, function (window) {
	'use strict';

var anim_in_array = [
	'fadeIn',
	'fadeInDown',
	'fadeInLeft',
	'fadeInUp',
];
var anim_out_array = [    
	'zoomOut',
	'fadeOutDown',
	'fadeOutLeft',
	'fadeOutRight',
];
	class modal {
	    constructor() {
	        this.name = "✨ Nasir modal ✨";
	        this.woner = "✨ Nasrullah(nasir) ✨";
	        this.x = false;
	        return this;
	    }

		notify(x=null) {
			if (!$('.nl_notify_container').length) {
				$('body').append(`<div class="nl_notify_container"></div>`);
			}
			let notify_content = `<div class="nl_notify animated-fast fadeIn ${x.type && x.type}">
						<div class="icon">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
						</div>
						<div class="text">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias corporis doloremque, corrupti sequi reiciendis ipsam doloribus dolor fugiat perferendis esse. Esse voluptatem veniam velit sapiente accusantium cum reprehenderit tempora soluta!
						</div>
						<button class="close">
							<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>
						</button>
					</div>`;
			$('.nl_notify_container').append(notify_content);
			
			let target = $('.nl_notify_container')
			target.animate({scrollTop: target.prop("scrollHeight")}, 100);
			// scroll container to bottom
			$('.nl_notify').find('.close').click(function() {
				// console.log($(this).parent());
				$(this).parent().addClass('fadeOutDown');
				$(this).parent().on('animationend', function () {
		            if (this.classList.contains('fadeOutDown')) {
		                $(this).removeClass('fadeOutDown');
		                $(this).css({ 'display': 'none' });
		            }
		        });
			});
		}
	    open(x=null) {
            
			var modal, 
				dialog,
				size,
				style='',
				open_animation, 
				close_animation, 
				body,
				id,
				title,
				custom = false,
				_this = this,
				body_class,
				x = (x !== null) ? x : {};
			if (typeof x.size === 'string') {
				if (x.size === 'sm') size = 'modal_sm';
				if (x.size === 'md') size = 'modal_md';
				if (x.size === 'lg') size = 'modal_lg';
			}
			
			if (typeof x.size === 'object') {
				for (const obj in x.size) {
					style += `${obj}: ${x.size[obj]};`;
				}
			}
			
			var modal_content = `<div class="modal_mask" id="nl_modal_360">
								    <div class="modal_container ${(size) ? size : ''} animated" style="${(style) ? style : ''}">
								        <div class="modal_header">
								            <div class="modal_title"></div>
								            <div class="modal_right">
								                <button class="modal_close">&times;</button>
								            </div>
								        </div>
								        <div class="modal_body" id="single_product_body"></div>
								    </div>
								</div>`;
			if (x.id !== undefined) {
				id = $('#'+x.id);
				if (id.length == 1) {
					custom = true;
				}
			}
			if (custom) {
				modal = id;
			} else { 
				if ($('#nl_modal_360').length !== 1) {
					$('body').prepend(modal_content);
				}
				modal = $('#nl_modal_360');
			} 
		    var in_rand = Math.floor((Math.random() * (anim_in_array.length -1)) + 1);
		    open_animation = (
		    			x.open_animation == undefined
		    			|| x.open_animation == null
		    			|| x.open_animation == false
		    			|| x.open_animation == ''
		    			|| typeof x.open_animation !== 'string'
		    			) ? anim_in_array[in_rand] : x.open_animation;
		    var out_rand = Math.floor((Math.random() * (anim_out_array.length -1)) + 1);
		    close_animation = (
		    			x.close_animation == undefined
		    			|| x.close_animation == null
		    			|| x.close_animation == false
		    			|| x.close_animation == ''
		    			|| typeof x.close_animation !== 'string'
		    			) ? anim_out_array[out_rand] : x.close_animation; 
		    			// zoomOutDown
		    
		    // defining variable from object
		    if (x.title !== undefined && x.title !== false && x.title !== '' && typeof x.title !== 'function') {

		    	modal.find('.modal_title').html(x.title);
		    } else {
		    	if (modal.find('.modal_title').html().length !== 0) {
		    		modal.find('.modal_title').html(modal.find('.modal_title').html());
		    	} else {
		    		modal.find('.modal_title').html('Dialog');
		    	}
		    }
		    /*/ title = (x.title == undefined || x.title == null || typeof x.title !== 'string') ? 'Dialog' : x.title;
		    // if (modal.find('.modal_title').html().length > 0) {
		    // 	modal.find('.modal_title').html(modal.find('.modal_title').html());
		    // } else {
		    // 	modal.find('.modal_title').html(title);
		    // }
		    // if (modal.find('.modal_title').html()) {} */
		    dialog = modal.find('.modal_container');
		    
		    // modal open process
		    modal.css({ 'display': 'flex' });
		    $('body').css({'overflow':'hidden'});
		    dialog.addClass(open_animation);
	    	dialog.on('animationend', function() {
				if (dialog.hasClass(open_animation)) {
					dialog.removeClass(open_animation);
					var modal_header = $('.modal_header');
					modal_header.contextmenu(function(e){
						e.preventDefault();
					});
				}
			});

		    body_class = dialog.find('.modal_body');
		    body = (x.body == undefined || x.body == null || typeof x.body !== 'function') ? false : x.body;
		    if (body == false) {
		    	if (String(body_class.html()).trim() == '') {
		    		body_class.addClass('flex_center');
		        	body_class.html('<h4>No Content Defined..</h4>');
		    	}
		    }
		    // preload start
		    // function 
		    if (x.preload && x.preload == true) {
		    	_this.preload(body_class);
		    }
		    // // preload end
		    if (body_class.length == 1) {
		        (body) ? body_make() : nocontent();
		    }
		    function nocontent() {
		    	if (String(body_class.html()).trim() == '') {
		    		body_class.addClass('flex_center');
		        	body_class.html('<h4>No Content Defined..</h4>');
		    	}
		    }
		    function body_make() {
		        body_class.removeClass('flex_center');
		        body(body_class, _this);
		    }    
		    //////////////////
		    if (!this.x) {
		    	this.x = {
			    	modal: modal,
			    	dialog: dialog,
			    	close_animation: close_animation
			    }
		    }
		    
		    // modal close process
		    // console.log(_this)
		    modal.find('.modal_close').click(function(){
		        _this.close();
		    });
			modal.click((e) => {
				if (e.target.classList.contains('modal_mask')) {
					_this.close();
				}
			});
		    //////////////////
		    
		    return this;
		}
		preload(arg) {
			if (arg!==undefined && arg.length!==0) {
				$(arg).html(`
		            <div class="preload_container">
		                <div class="preload_wrapper">
		                    <div class="preload">
		                        <div class="dot"></div>
		                    </div>
		                    <div class="preload">
		                        <div class="dot"></div>
		                    </div>
		                    <div class="preload">
		                        <div class="dot"></div>
		                    </div>
		                    <div class="preload">
		                        <div class="dot"></div>
		                    </div>
		                    <div class="preload">
		                        <div class="dot"></div>
		                    </div>
		                    <div class="preload">
		                        <div class="dot"></div>
		                    </div>
		                    <div class="preload_text">Plese wait..</div>
		                </div>
		            </div>
		        `);
			}
		}
		loading(arg) {
			if (arg!==undefined && arg.length!==0) {
				arg.addClass('loading');
			}
		}
		close(anim=null) {
	    	var c 				= this.x,
		    	modal 			= c.modal,
		    	dialog 			= c.dialog,
		    	close_animation = (c.close_animation !== undefined) ? c.close_animation : 'zoomOutDown';
		    	if (anim!==null && typeof anim == 'string') {
		    		close_animation = anim;
		    	}
		    if (dialog) {
		    	dialog.addClass(close_animation);
		        dialog.on('animationend', function () {
		        	// console.log
		            if (this.classList.contains(close_animation)) {
		                $(this).removeClass(close_animation);
		                modal.css({ 'display': 'none' });
		                $('body').css({ 'overflow': '' });
		            }
		        });
		    }
	    	

	        if (this.x) {
	        	this.x = false
	        	return this;
	        }
	    }
	}
	return window.NL_Modal = new modal(); 
});


