$(document).ready(function(){

//EFECTO MENU------------------------------
    $('.menu a').each(function(index, elemento){
        $(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 800 + (index * 500));
    });

//SCROLL ELEMENTOS MENU------------------------------
    var inicio = $('#inicio').offset().top,
    nosotros = $('#nosotros').offset().top,
    servicios = $('#servicios').offset().top,
    productos = $('#productos').offset().top,
    precios = $('#precios').offset().top,
    galeria = $('#galeria').offset().top,
    ubicacion = $('#ubicacion').offset().top,
    contacto = $('#contacto').offset().top;

    $('#btn-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio - 100
        }, 100);
    });

    $('#btn-nosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros
        }, 100);
    });

    $('#btn-servicios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios
        }, 100);
    });

    $('#btn-productos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: productos
        }, 100);
    });

    $('#btn-precios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: precios
        }, 100);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 100);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 100);
    });

    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 100);
    });

});