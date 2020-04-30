$('#inicio').on('click', function(){
    $('html, body').animate( {scrollTop: 0}, 1000);
    $('#inicio2').css("border-bottom","3px solid #95C020");
    $('#nosotros2').css("border-bottom","none");
    $('#servicios2').css("border-bottom", "none");
    $('#especialistas2').css("border-bottom","none");
    $('#desarrollamos2').css("border-bottom","none");
    $('#contacto2').css("border-bottom","none");
})

$('#nosotros').on('click', function(){
    $('html, body').animate( {scrollTop: 610}, 1000);
    $('#inicio2').css("border-bottom", "none");
    $('#nosotros2').css("border-bottom","3px solid #95C020");
    $('#servicios2').css("border-bottom", "none");
    $('#especialistas2').css("border-bottom","none");
    $('#desarrollamos2').css("border-bottom","none");
    $('#contacto2').css("border-bottom","none");
})

$('#servicios').on('click', function(){
    $('html, body').animate( {scrollTop: 1650}, 1000);
    $('#inicio').css("borderbottom", "none");
    $('#nosotros2').css("border-bottom","none");
    $('#servicios2').css("border-bottom","3px solid #95C020");
    $('#especialistas2').css("border-bottom","none");
    $('#desarrollamos2').css("border-bottom","none");
    $('#contacto2').css("border-bottom","none");
})

$('#especialistas').on('click', function(){
    $('html, body').animate( {scrollTop: 2360}, 1000);
    $('#inicio').css("borderbottom", "none");
    $('#nosotros2').css("border-bottom","none");
    $('#servicios2').css("border-bottom","none");
    $('#especialistas2').css("border-bottom","3px solid #95C020");
    $('#desarrollamos2').css("border-bottom","none");
    $('#contacto2').css("border-bottom","none");
})

$('#desarrollamos').on('click', function(){
    $('html, body').animate( {scrollTop: 2990}, 1000);
    $('#inicio').css("borderbottom", "none");
    $('#nosotros2').css("border-bottom","none");
    $('#servicios2').css("border-bottom","none");
    $('#especialistas2').css("border-bottom","none");
    $('#desarrollamos2').css("border-bottom","3px solid #95C020");
    $('#contacto2').css("border-bottom","none");
})

$('#contacto').on('click', function(){
    $('html, body').animate( {scrollTop: 3570}, 1000);
    $('#inicio').css("borderbottom", "none");
    $('#nosotros2').css("border-bottom","none");
    $('#servicios2').css("border-bottom","none");
    $('#especialistas2').css("border-bottom","none");
    $('#desarrollamos2').css("border-bottom","none");
    $('#contacto2').css("border-bottom","3px solid #95C020");
})