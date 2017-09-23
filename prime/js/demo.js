$(document).ready(function($) {

	if($('body').hasClass('nav-bottom')) {
		$('.dropdown').each(function(){
			$(this).removeClass('dropdown').addClass('dropup');
		});
	}

	function fixHeight() {

		var headerHeight = $('.navbar-demo').outerHeight();

		$('#iframe').css('height', $(window).height());

	}

    fixHeight()

	$(window).resize(function () {

		fixHeight();

	}).resize();

    $('.fa-times').click(function(){
        var src = $('#iframe').attr('src');
        window.location.replace(src);
    });

	$('.rwd').click(function(){
		$('.rwd').each(function(){
			$(this).parent().removeClass('active');
		});
		$(this).parent().addClass('active');

		if ($(this).data('width') != 'auto') {
			$('#iframe').animate({
				width: $(this).data('width')
			}, 500);
			//css('width', $(this).data('width'));
		} else {
			//$('#iframe').css('width', '100%').css('margin', '');
			$('#iframe').animate({
				width: '100%'
			}, 500);
		}
	});

	$('.buy-option').click(function(){
        var type = $(this).data('license-type');

        $(this).parent().find('li').each(function(){
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');

        $(this).parent().parent().find('.selected-license .license-type').each(function(){
            $(this).hide();
            if($(this).data('license-type') == type ) {
                $(this).show();
            }
        });

        $('.buy-button a').each(function(){
            $(this).hide();
            if($(this).data('license-type') == type ) {
                $(this).show();
            }
        });
    });
});
