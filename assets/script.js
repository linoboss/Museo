jQuery(document).ready(function($) {
    $("#titulo-container").hide();
    $("#edificio").hide();
    $("#barra-inferior").hide();
    $("#barra-superior").hide();
    $('.carousel').fadeIn(500, function() {
        $("#edificio").slideDown(1000, function() {
            $("#barra-inferior").fadeIn(500);
            $("#barra-superior").fadeIn(500, function(){
                $("#titulo-container").fadeIn(0);
            });
        });
    });    
    
    $('.scroll').click(function(){
        var id_part = $(this).attr('id');
        id_part = '#nav_' + id_part;
        $('html, body').animate({
            scrollTop: $(id_part).offset().top
        },1000);
    });

    jQuery(window).scroll(function() {
        var offset = $('#nav_amazonas').offset();
        if (jQuery(this).scrollTop() > (offset.top - 20)) {
           jQuery('.back-to-top').fadeIn(300);     
        } else {
            jQuery('.back-to-top').fadeOut(300);
        } 
    });
});

amazonas = {img_scr: "images/amazonas.png",
            titulo: "MUSEO LEYMEBAMBA",
            contenido: "El Museo de Leymebamba, reúne piezas arqueológicas, momias, ofrendas funerarias y otros bienes culturales pertenecientes a la Cultura Chachapoyas.",
            direccion: "Av. Austria s/n, San Miguel",
            telefono: "(041) 816803 / (041) 816806",
            horario: "martes a domingo<br>de 9:30 a.m. a 4:30 p.m. o previa cita",
            email: "leymebamba@museoleymebamba.org"}

ancash1 = {img_scr: "images/ancash.png",
            titulo: 'MUSEO ARQUELÓGICO DE ANCASH "AUGUSTO SORIANO INFANTE"',
            contenido: "La colección de este museo está dividido en 4 salas divididas en tres niveles, donde se exponen secuencialmente bienes culturales cerámica, textiles, líticos, metales, materiales orgánicos de los años 10500 a.C.  a 700 a. C. Junto a él se encuentra el parque Lítico, el más grande de América, donde se presentan 120 monolitos, dinteles, cabezas clavas y otras piezas lítica representativas de la Cultura Recuay.",
            direccion: "Av. Luzuriaga 762",
            telefono: "(043) 421551",
            horario: "martes a domingo<br>de 9:00 a.m. a 5:00 p.m.",
            email: "ancash@mcultura.gob.pe"}