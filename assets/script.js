jQuery(document).ready(function($) {
    //Audio element
    var tableHooverSound = document.createElement('audio');
    tableHooverSound.setAttribute('src', 'sounds/water_droplet.mp3');
    var scrollClick = document.createElement('audio');
    scrollClick.setAttribute('src', 'sounds/button_click_on.mp3');
    var scrollBack = document.createElement('audio');
    scrollBack.setAttribute('src', 'sounds/Sneeze-sound.mp3');

    //Effects
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
        $('#nav_ciudad').removeClass('hidden');

        var ciudad = $(this).attr('id');
        var Museos = window[ciudad];
        $('#cuerpo').empty();
        $('.parallax-mirror').remove();
        $('#nav_ciudad h4 b').text(ciudad.replace('_',' ').toUpperCase());

        for (var i = 0; i < Museos.length; i++) {
            link = 'href= http://' + Museos[i].link;
            hidden = '';
            
            if(!Museos[i].link){
                link = '';
                hidden = 'hidden';
            }
            var email = Museos[i].email ? '<td class="text-right"><b>Email:</b></td> <td class="text-left"><a>'+Museos[i].email+'</a></td>' : '' 
            
            link_html = '<a ' + link + '><img class="pull-right link '+ hidden + '"src='+"images/link.png"+'></a>';
            html_cuerpo = 
                '<div class="about container-fluid">'+
                    '<header class="row">' +
                        '<h2 class="col-xs-8 col-xs-offset-1 wowload fadeInLeft width-60"><b>'+Museos[i].museo+'</b></h2>'+
                        '<figure class="col-xs-3 wowload fadeInRight width-40" style="padding-top: 1%">'+
                            link_html +
                        '</figure>'+
                    ' </header>'+
                    '<div class="row">'+
                        '<div class="col-sm-4 col-sm-offset-1 wowload fadeInLeft">'+
                            '<figure class="padding-top-6">'+
                                '<img src='+Museos[i].img_src+' class="enmarcar img-responsive" alt="Responsive image">'+
                            '</figure>'+
                        '</div>'+
                        '<div class="col-sm-7 wowload fadeInRight">'+
                            '<article class="padding-top-6 col-sm-10">'+       
                                '<p class="text-justify">'+Museos[i].contenido+'</p>'+ 
                            '</article>'+
                            '<table class="table table-borderless table-config -center">'+
                            '<tbody>'+
                                '<tr>'+
                                    '<td class="text-right"><b>Dirección:</b></td>'+
                                    '<td class="text-left">'+Museos[i].direccion+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td class="text-right"><b>Teféfono:</b></td>'+
                                    '<td class="text-left">'+Museos[i].telefono+'</td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<td class="text-right"><b>Horario:</b></td>'+
                                    '<td class="text-left">martes a domingo<br>'+Museos[i].horario+'</td>'+
                                '</tr>'+
                                '<tr>'+ email +
                                '</tr>'+
                            '</tbody>'+
                          '</table>'+                      
                        '</div>'+
                      '</div>'+     
                    '</div>'+
                  '</div>';
                $('#cuerpo').append(html_cuerpo);
        };
        var test = 'images/bg.png';
        if (ciudad == 'ancash') { test = 'images/ancash1.png'}
        $('.parallax-window').parallax({
            imageSrc: test,
            zIndex: 0,
        });
        jQuery(window).trigger('resize').trigger('scroll');
    }); 
    
    $('.scroll').click(function(){
        scrollClick.play(); 
        id_part = '#nav_ciudad';
        $('html, body').animate({
            scrollTop: $(id_part).offset().top
        },1500);
    });

    $('.back-to-top').click(function(){
        scrollBack.play();
        $('html, body').animate({
            scrollTop: $('.formato').offset().top
        },1000);
    });

    jQuery(window).scroll(function() {
        var offset = $('#nav_ciudad').offset();
        if (!($('#nav_ciudad').hasClass('hidden')) && (jQuery(this).scrollTop() > (offset.top - 20))) {
           jQuery('.back-to-top').fadeIn(300);     
        } else {
            jQuery('.back-to-top').fadeOut(300);
        } 
    });

    $('table tr, .back-to-top').mouseenter(function() {
        tableHooverSound.currentTime = 0;
        tableHooverSound.play();        
    });
});
amazonas = {img_src: "images/amazonas.png",
            link:'www.museoleymebamba.org',
            museo: "MUSEO LEYMEBAMBA",
            contenido: "El Museo de Leymebamba, reúne piezas arqueológicas, momias, ofrendas funerarias y otros bienes culturales pertenecientes a la Cultura Chachapoyas.",
            direccion: "Av. Austria s/n, San Miguel",
            telefono: "(041) 816803 / (041) 816806",
            horario: "martes a domingo<br>de 9:30 a.m. a 4:30 p.m. o previa cita"};

amazonas = [amazonas]

ancash1 = {img_src: "images/ancash1.png",
            museo: 'MUSEO ARQUELÓGICO DE ANCASH "AUGUSTO SORIANO INFANTE"',
            contenido: "La colección de este museo está dividido en 4 salas divididas en tres niveles, donde se exponen secuencialmente bienes culturales cerámica, textiles, líticos, metales, materiales orgánicos de los años 10500 a.C.  a 700 a. C. Junto a él se encuentra el parque Lítico, el más grande de América, donde se presentan 120 monolitos, dinteles, cabezas clavas y otras piezas lítica representativas de la Cultura Recuay.",
            direccion: "Av. Luzuriaga 762",
            telefono: "(043) 421551",
            horario: "martes a domingo<br>de 9:00 a.m. a 5:00 p.m.",
            email: "ancash@mcultura.gob.pe"};    

ancash2 = {img_src: "images/ancash2.png",
            museo: 'Museo Nacional Chavín',
            contenido: "Posee una colección diversa de bienes culturales que datan desde las primeras investigaciones realizadas por el reconocido arqueólogo peruano Julio C. Tello en esta zona.<br>En las salas se exhiben 19 conchas de caracol usadas como pututos o trompetas, cabezas clavas y lápidas, así como una maqueta de la zona monumental. En una sala se encuentra el Obelisco Tello, escultura emblemática de 2.52 metros de alto, que sintetiza la concepción religiosa del mundo Chavín.",
            direccion: "Prolongación Av. 17 de enero norte s/n",
            telefono: "(043) 454011",
            horario: "martes a domingo<br>de 9:00 a.m. a 5:00 p.m.",
            email: "ancash@mcultura.gob.pe"};

ancash = [ancash1, ancash2];

/* Arequipa */

arequipa = {img_src: "images/arequipa.png",
            museo: 'Museo del Monasterio de Santa Catalina',
            link: 'www.santacatalina.org.pe',
            contenido: "Este museo ubicado dentro del Monasterio de santa Catalina alberga bienes culturales que datan de la época colonial siglos XVII, XVIII y XIX, están constituidos por pinturas coloniales, ornamentos religiosos, mobiliario y bienes de uso cotidiano de la comunidad dominica que habitaron este monasterio de clausura.",
            direccion: "Calle Santa Catalina Nº 301",
            telefono: "(054) 608282",
            horario: "lunes a domingo<br>de 8:00 a.m. a 5:00 p.m.",
            email: "informes@santacatalina.org.pe"};

arequipa = [arequipa]

ayacucho1 = {img_src: "images/ayacucho1.png",
museo: "MUSEO DE LA MEMORIA  ",
contenido: "Este museo cuenta con cuatro salas en las que se exponen fotografías, pinturas, restos de vestimentas y otros objetos relacionados a la guerra interna que vivió el Perú en la década de 1980 y cuyo máximo impacto social se produjo en Ayacucho.",
direccion: "Urbanización Nery García Zárate, Jr. Libertad 1229",
telefono: "(066) 317170",
horario: "lunes a domingo de 9:00 a.m. a 1:00 p.m. y de 3:00 p.m. a 6:00 p.m."};     

ayacucho2 = {img_src: "images/ayacucho2.png",
museo: "MUSEO DEL SITIO DE QUINUA",
contenido: "Ubicado a 35 Km. Al noreste de Ayacucho. En la sala de exposición permanente podemos encontrar armas, uniformes, maquetas y otros objetos relacionados a la Batalla de Ayacucho. Destaca el ambiente donde se firmó la Capitulación de Ayacucho el 9 de diciembre 1824.",
direccion: "Plaza Principal de Quinua",
telefono: "(066) 312056 ",
horario: "martes a domingo<br>de 9:30 a.m. a 4:30 p.m. o previa cita",
email: "ayacucho@mcultura.gob.pe"};

ayacucho3 = {img_src: "images/ayacucho3.png",
museo: "MUSEO DE SITIO WARI",
contenido: "En este museo de exhibe los bienes culturales encontrados en la zona Arqueológica Monumental Wari: cerámicas, textiles, líticos entre otros e información documentada con fotografías   de la zona arqueológica.",
direccion: "Complejo Arqueológico de Wari. Km. 23 Carretera Ayacucho - Quinua.",
telefono: "(066) 312056",
horario: "martes a domingo de 9.00 a.m. a 5.00 p.m.",
email: "ayacucho@mcultura.gob.pe"};

ayacucho = [ayacucho1, ayacucho2, ayacucho3];
/*Estado CAJAMARCA*/

cajamarca1 = {img_src: "images/cajamarca1.png",
museo: "MUSEO ARQUEOLÓGICO HORACIO URTEAGA.  UNIVERSIDAD NACIONAL DE CAJAMARCA",
contenido: "Se encuentran en exhibición piezas de las diversas culturas de la región.",
direccion: "Jr. Del Batán 289 .",
telefono: "(076) 340440",
horario: "lunes a viernes de 8:00 a.m. a 2:00 p.m.",
email: "ayacucho@mcultura.gob.pe"};

cajamarca2 = {img_src: "images/cajamarca2.png",
museo: "MUSEO DE ARTE RELIGIOSO DEL CONVENTO DE SAN FRANCISCO",
contenido: "Está ubicado en el Convento de San Francisco y  reúne  una serie de pinturas de la Orden franciscana, esculturas y muebles del Período virreinal.",
direccion: "Jr. Dos de Mayo 435 .",
telefono: "(076) 362994",
horario: "lunes a sábado de 9:00 a.m. a 5:00 p.m."};


cajamarca3 = {img_src: "images/cajamarca3.png",
museo: "MUSEO KUNTUR WASI",
contenido: "En este museo se exhiben piezas que corresponden a la Zona Arqueológica del Sitio de Kuntur Wasi, cerámica, orfebrería, líticas y óseas.  También exhibe  documentos y fotografías de los trabajos realizados por la Universidad de Tokio en el sitio arqueológico.",
direccion: "Avenida del Museo s/n. Centro Poblado Kuntur Wasi",
horario: "martes a domingo de 9:00 a.m. a 5:00 p.m."};

cajamarca = [cajamarca1, cajamarca2, cajamarca3];

/*Estado CALLAO */

callao1 = {img_src: "images/callao1.png",
museo: "MUSEO DE SITIO NAVAL SUBMARINO ABTAO",
link: "www.submarinoabtao.com",
contenido: "Cuenta con una sala de exhibición, donde se resume la evolución histórica de los submarinos en el Perú desde inicios del siglo XX. Cuenta con una sala de proyecciones y finalmente  hay un recorrido por el interior del submarino donde se aprecia al detalle sus compartimientos y finalmente se realiza una recreación en audio de un combate.",
direccion: "Av. Jorge Chávez 120-A.",
telefono: "(01) 7956900",
horario: "martes a domingo de9:30 a.m. a 4:30 p.m.",
email: "museo.abtao@hotmail.com / reservas.abtao@hotmail.com"};

callao2 = {img_src: "images/callao2.png",
museo: "MUSEO DEL EJÉRCITO FORTALEZA REAL FELIPE",
link: "www.museodelejercito.com.pe",
contenido: "La fortaleza del Real Felipe, edificada en el siglo XVIII, es una de las pocas obras de arquitectura militar en el país y la más grande que construyeron los españoles en América del Sur. Convertida hoy en museo, la construcción con forma pentagonal abre sus puertas y permite al visitante sumergirse en la época colonial. Ofrece un recorrido por la historia del Ejército del Perú y sus héroes. En su colección se aprecian armas de guerra, uniformes, medallas, la bandera nacional, entre otros bienes culturales.",
direccion: "Fortaleza del Real Felipe s/n. Plaza Independencia",
telefono: "(01) 4290532",
horario: "lunes a domingo de 9:00 a.m. a 4:00 p.m. Incluidos feriados."};

callao3 = {img_src: "images/callao3.png",
museo: "MUSEO DE LA FUERZA DE AVIACIÓN NAVAL",
contenido: "Presenta modelos a escala de la evolución de aeronaves con las que ha contado la Fuerza Aérea del Perú.",
direccion: "Av. Faucett s/n – Callao (antes del Aeropuerto).",
telefono: "(01) 6137100",
horario: "Lunes a viernes de 8:00 a.m. a 5:00 p.m. (previa cita)"};

callao = [callao1, callao2, callao3];

/*Estado CALLAO */

cusco1 = {img_src: "images/cusco1.png",
museo: "MUSEO COMUNITARIO DE PISAC",
contenido: "Posee dos salas en las que se aprecia la representación del proceso de producción de los textiles y la elaboración de cerámica. Asimismo, el museo exhibe una colección de bienes culturales arqueológicos de cerámica, líticos, textiles y restos humanos; complementa la exposición una recreación de la estructura de un entierro Inca.",
direccion: "Esquina Av. Amazonas y Av. Federico Zamalloa.",
telefono: "(084) 974757466 / (084) 9051316",
horario: "lunes a domingo de 8:00 Horario: lunes a domingo de 8:00 a.m. a 5:00 p.m.",
email: "museopisac@gmail.com"};

cusco2 = {img_src: "images/cusco2.png",
museo: "MUSEO DE ARTE CONTEMPORÁNEO",
link: "www.municusco.gob.pe",
contenido: "El museo se encuentra ubicado en el inmueble de la Municipalidad Provincial de Cusco y tiene tres salas de exposición temporal en las que se exhiben pinturas, imaginería, esculturas y piezas textiles de artistas locales contemporáneos.",
direccion: "Plaza Regocijo s/n.",
telefono: "(084) 240006; (084) 231591",
horario: "lunes a viernes: 9:00 a.m. a 6:00 p.m. y sábados de 8:00 a.m. a 5:00 p.m.",
email: " museomunicusco@hotmail.com"};

cusco3 = {img_src: "images/cusco3.png",
museo: "MUSEO DE ARTE PRECOLOMBINO",
link: "www.map.museolarco.org",
contenido: "El museo está ubicado en la Casa Cabrera, reconocida como Patrimonio Cultural de la Nación. Posee una colección de bienes culturales arqueológicos distribuidos en once salas referidas al periodo formativo, culturas Nasca, Moche, Wari, Chimú, Chancay e Inca. También cuenta con salas de joyería en concha y hueso, salas de madera, oro y plata.",
direccion: "Plaza de las Nazarenas 231.",
telefono: "(084) 233210",
horario: "lunes a domingo de 8:00 a.m. a 10:00 p.m.",
email: "amap@infonegocio.net.pe"};

cusco4 = {img_src: "images/cusco4.png",
museo: "MUSEO MACHUPICCHU",
contenido: "Está situado en la Casa Concha, inmueble declarado Patrimonio Cultural de la Nación. Cuenta con once salas de exposición permanente y una sala de exposición temporal. Presenta la colección de bienes culturales provenientes del Santuario Histórico de Machu Picchu devueltos por la Universidad de Yale, tales como cerámica, líticos, metal y restos óseos humanos. Del mismo modo, exhibe fotografías y una maqueta interactiva del Santuario Histórico de Machupicchu.",
direccion: "Calle Santa Catalina Ancha S/N.",
telefono: "(084) 255535",
horario: "lunes a domingo de 9:00 a.m. a 5:00 p.m.",
email: "museocasaconcha@unsaac.edu.pe"};

cusco = [cusco1, cusco2, cusco3, cusco4];

/*Estado Huancavelica */

huancavelica1 = {img_src: "images/huancavelica1.png",
museo: "MUSEO ARQUEOLÓGICO  “SAMUEL HUMBERTO ESPINOZA LOZANO”",
contenido: "El museo fue creado por iniciativa de los pobladores, gracias a la donación de la colección privada del investigador Samuel Humberto Espinoza Lozano, discípulo de Julio C. Tello. La colección está compuesta por restos humanos, artefactos líticos, monolitos, cerámicas, textiles y metales. Tiene dos salas de exhibición permanente con fotografías de sitios arqueológicosy dioramas que representan la geografía de la región..",
direccion: "Jr. 24 de Junio s/n, Huaytará.",
telefono: "(067) 453420",
horario: "martes a domingo de 9:00 a.m. a 5:00 p.m.",
email: " huancavelica@mcultura.gob.pe"};

huancavelica2 = {img_src: "images/huancavelica2.png",
museo: "MUSEO REGIONAL “DANIEL HERNÁNDEZ MORILLO” ",
contenido: " El museo comprende dos salas de exposición que exhiben bienes culturales de la región. Muestra una gigantografía que detalla la zona arqueológico Inca Huasi - Huaytará y la recreación de un entierro prehispánico.",
direccion: "Plazoleta de San Juan de Dios s/n.",
telefono: "(067) 453420",
horario: "martes a domingo de 9:00 a.m. a 5:00 p.m.",
email: " huancavelica@mcultura.gob.pe"};

huancavelica = [huancavelica1, huancavelica2];

/*Estado Huánuco  */

huanuco1 = {img_src: "images/huanuco1.png",
museo: "MUSEO DE CHURUBAMBA",
contenido: "El museo contiene una sala de exposición en donde se presenta la colección de momias preincas del estilo Papahuasi, cerámica y piezas líticas; así como bienes culturales de la época colonial. Destaca un panel con dibujos de los recursos turísticos de Churubamba.",
direccion: "Jr. Javier Lindo Zárate 110.",
horario: "lunes a viernes 9:00 a.m. a 5:00 p.m."};

huanuco2 = {img_src: "images/huanuco2.png",
museo: "MUSEO DE ZOOLOGÍA DE LA UNIVERSIDAD AGRARIA DE LA SELVA",
contenido: " El museo exhibe una colección de especies disecadas de la fauna amazónica. Cuenta además con un jardín botánico que alberga especies de la flora tropical, forestal, ornamental y silvestre. Destaca su colección de animales vertebrados e invertebrados.",
direccion: "Av. Universitaria km. 1.5.",
telefono: "(064) 562341",
horario: "lunes a viernes de 10:00 a.m. a 1:00 p.m. y de 2:00 p.m. a 5:00 p.m.",
Administración: "Universidad Agraria de la Selva"};

huanuco3 = {img_src: "images/huanuco3.png",
museo: "SALA DE EXHIBICIÓN DEL COMPLEJO ARQUEOLÓGICO DE KOTOSH",
contenido: "La sala se encuentra en las inmediaciones la zona arqueológica monumental de Kotosh. La exposición se centra en los estudios realizados por los investigadores japoneses en la zona. Se exhiben bienes culturales de cerámica, una maqueta de la arquitectura de Kotosh y una recreación del Templo de las Manos Cruzadas.",
direccion: "Carretera Huánuco - La Unión.",
telefono: "(062) 512507",
horario: "martes a domingo de 9:00 a.m. a 5:00 p.m.",
email: "huanuco@mcultura.gob.pe"};

huanuco = [huanuco1, huanuco2, huanuco3];

/*Estado ICA  */

ica1 = {img_src: "images/ica1.png",
museo: "CASA MUSEO MARÍA REICHE",
contenido: "El museo está construido al lado del lugar donde vivió María Reiche Newman en sus primeros años de estudio de las Pampas de Nasca. En el lugar se ha reconstruido un recinto que reproduce la vivienda de la investigadora y forma parte de la exhibición la mesa de trabajo, vajilla, papeles de trabajo, y otros muebles. Asimismo, se aprecian mapas, planos, fotos, material  arqueológico y una maqueta didáctica de sus diseños.",
direccion: "Km. 425 Carretera Panamericana Sur, San Miguel de La Pascana.",
horario: "lunes a viernes de 9:00 a.m. a 5:00 p.m. Domingos y feriados de 8:00 a.m. a 6:00 p.m.",
email: "areichelinasca@hotmail.com"};

ica2 = {img_src: "images/ica2.png",
museo: "MUSEO DE SITIO DE PARACAS “JULIO C. TELLO” ",
contenido: "El museo de sitio Julio C. Tello de Paracas se encuentra ubicado dentro de la Reserva  Nacional de Paracas. Fue construido en 1965 y sufrió daños por el sismo de Pisco del 15 de agosto de 2007.   Cuenta con un área de 1,020 metros cuadrados.  Este museo alberga variadas piezas cerámicas, tejidos, momias de las culturas que se desarrollaron en la zona.<br>La cultura Paracas se caracteriza por las trepanaciones craneanas, las cuales se pueden observar en momias que se exhiben en el lugar.<br>El museo presenta una explicativa evolución de la cultura Paracas, los cuales también desarrollaron actividades como la pesca, elaboración de textiles y momificación de los muertos.",
direccion: "Km. 27 Carretera Pisco - Puerto San Martín (Reserva Natural de Paracas).",
telefono: "(056) 234383"};

ica3 = {img_src: "images/ica3.png",
museo: "MUSEO REGIONAL DE ICA “ ADOLFO BERMÚDEZ JENKINS”",
contenido: "El museo presenta dos salas de exposición. La sala de Arqueología, con bienes culturales Paracas, Nasca, Wari e Inca; y la de Bioantropología, que detalla costumbres funerarias, deformaciones craneanas, trepanaciones, cabezas trofeo y restos humanos que evidencian paleopatologías. En la parte posterior del edificio se encuentra una reproducción de las Líneas de Nasca que pueden ser apreciadas desde una plataforma.",
direccion: "Jr. Ayabaca cuadra 8 s/n. Urb. San Isidro",
telefono: "(056) 234383",
horario: "lunes a viernes de 8:00 a.m. a 7:00 p.m. sábados y domingos de 8:30 a.m. a 6:30 p.m.",
email: "ica@mcultura.gob.pe"};

ica= [ica1, ica2, ica3];

/*Estado Junín   */

junin1 = {img_src: "images/junin1.png",
museo: "MUSEO DE ARQUEOLOGÍA CATALINA HUANCA",
contenido: "El museo exhibe una colección de bienes culturales e instrumentos agrícolas de las culturas Wanka y Wari, en su mayoría líticos, además de piezas de material orgánico y cerámica.",
direccion: "Av. Circunvalación 220 (Camino a Las Brisas).",
telefono: "(064) 291916 / (064) 242030",
horario: "lunes a viernes de 10:00 a.m. a 2:00 p.m."};

junin2 = {img_src: "images/junin2.png",
museo: "MUSEO DE LA CULTURA DE TARMA",
contenido: "En el primer nivel se aprecian fotografías del patrimonio virreinal y republicano de la ciudad; dos de sus ambientes están dedicados al patrimonio inmaterial de la Provincia de Tarma. En el segundo nivel se exhiben bienes culturales del periodo prehispánico del Perú.",
direccion: "Jr. Arequipa 190N°",
telefono: "(064) 321021 Anexo 114",
horario: "lunes a viernes 8:00 a.m. a 1:00 p.m. y de 3:00 p.m. a 6:00 p.m.",
email: " museo.tarma@hotmail.com"};

junin3 = {img_src: "images/junin3.png",
museo: "MUSEO DE SITIO DE CHACAMARCA",
contenido: "El museo se encuentra en el interior del Monumento Vencedores de Junín, declarado Patrimonio Histórico Artístico de la Nación. Cuenta con una sala de exposición y alberga una colección de bienes culturales históricos y republicanos, entre los que destacan los pertrechos de la Batalla de Junín. Además, se exponen fotografías de la biodiversidad de la puna húmeda de los Andes centrales..",
direccion: "Pampas de Chacamarca (Carretera Central km. 222 – Oroya – Cerro de Pasco).",
telefono: "(064) 344146",
horario: "lunes a domingo de 9:00 a.m. a 3:00 p.m.",
email: " rmedrano@sernanp.gob.pe"};

junin4 = {img_src: "images/junin4.png",
museo: "MUSEO ETNOGRÁFICO SANTA ROSA DE OCOPA",
contenido: "El museo se encuentra dentro del Convento de Ocopa, alberga una colección de arte religioso y bienes etnográficos, así como especies de flora y fauna de la región.",
direccion: "Convento de Ocopa s/n.",
telefono: "(064) 581490",
horario: "miércoles a lunes de 9:00 a.m. a 12:00 p.m. y de 3:00 p.m. a 6:00 p.m.",
email: "conventosantarosa@hotmail.com"};

junin = [junin1, junin2, junin3, junin4]

/*Estado La Libertad*/

libertad1 = {img_src: "images/libertad1.png",
museo: "LA LIBERTAD",
contenido: "Casa de estilo neoclásico que fuera habitada en el siglo XIX por el naturalista italiano Antonio Raimondi. Cuenta con una sala permanente en la que se expone sobre la vida y obra del científico a través de recursos lúdicos e interactivos.",
direccion: "Jr. Dos de Mayo 432.",
telefono: "(044) 528338 / (044) 528646",
horario: "martes a sábado de 9:00 a.m. a 1:00 p.m. y de 3:00 p.m. a 8:00 p.m.",
email: "casaraimondi_sanpedrodelloc@hotmail.com"};

libertad2 = {img_src: "images/libertad2.png",
museo: "MUSEO CAO ",
link: "www.fundacionwiese.com/arqueologia/museodesitiocao",
contenido: "El museo exhibe los bienes culturales recuperados a partir del Proyecto Arqueológico del Complejo El Brujo. Se presenta a la Señora de Cao, su ajuar funerario, joyas, símbolos de poder y ofrendas.",
direccion: "Complejo El Brujo, Localidad Magdalena de Cao.",
telefono: "(01) 6114343 anexo 127",
horario: "lunes a domingo de 9:00 a.m. a 5:00 p.m."};

libertad3 = {img_src: "images/libertad3.png",
museo: "MUSEO DE SITIO DE CHAN CHAN",
contenido: "El museo de sitio se ubica en la sección este de la Zona Arqueológica Monumental de Chan Chan. Exhibe bienes  culturales recuperados en las investigaciones realizadas. Además, se desrcibe el desarrollo cultural prehispánico de la región La Libertad, desde los primeros artefactos líticos hasta la cerámica de las culturas Moche y Chimú. Además, se exponen temas relacionados a la agricultura, técnicas de irrigación y productos cultivados en el valle de Moche. Asimismo, cuenta con una sala computarizada que narra el origen y desarrollo del señorío Chimor.",
direccion: "Av. Chan Chan s/n<br>(Carretera a Huanchaco) Centro Poblado menor de Villa del Mar.",
telefono: "(044) 234862",
horario: "martes a domingo de 9:00 a.m. a 5:00 p.m.",
email: "lalibertad@mcultura.gob.pe"};

la_libertad = [libertad1, libertad2, libertad3];

/*Estado Lambayeque*/

lambayeque1 = {img_src: "images/lambayeque1.png",
museo: "MUSEO AFROPERUANO",
link: "www.museoafroperuano.com",
contenido: "El Museo Afroperuano de Zaña se inauguró el año 2005 convirtiéndose en la primera institución de su género en el país. Presenta una colección de instrumentos musicales y discografía de afrodescendientes. Tiene carretas antiguas de madera que fueron utilizadas en las haciendas para el transporte de caña de azúcar. Cuenta con una colección de pinturas, dibujos, mapas y fotografías que explican la secuencia histórica de la presencia de los africanos y descendientes en las Américas y específicamente en el Perú desde el siglo XVI hasta el siglo XIX. Además se exhiben piezas de castigos y torturas a los esclavizados y elementos de supervivencia en la vida cotidiana.",
direccion: "Calle Independencia 645.",
telefono: "(074) 431042",
horario: "martes a domingo de 9:00 a.m. a 12:30 p.m. y de 3:00 p.m. a 5:00 p.m.",
email: "museoafroperuano@yahoo.es"};

lambayeque2 = {img_src: "images/lambayeque2.png",
museo: "MUSEO ARQUEOLÓGICO NACIONAL BRÜNING ",
contenido: "Inaugurado en 1966 y está ubicado a dos cuadras del parque principal. Nace como fruto de la labor investigadora de 48 años del peruanista Enrique Bruning. En los jardines de este hermoso museo destaca imponente la figura de Naylamp, fundador de la dinastía de Reyes lambayecanos.",
direccion: "Av. Huamachuco S/N.",
telefono: "(074) 282110",
horario: "Lunes a Domingo de 9:00 am a 5:30 Pm",
email: "museonacionalbruning@yahoo.es"};

lambayeque3 = {img_src: "images/lambayeque3.png",
museo: "MUSEO DE SITIO HUACA RAJADA – SIPÁN ",
contenido: "El Museo de Sitio de Huaca Rajada-Sipán exhibe las piezas encontradas en la tumba del sacerdote guerrero ubicado en la zona arqueológica de Sipán y materiales audiovisuales que explican el desarrollo de la cultura norteña.",
direccion: "Campiña Huaca Rajada S/N.",
telefono: "(074) 800048",
horario: "Lunes a Domingo de 9:00am a 5:00pm.  ",
email: "museohrsipan@gmail.com"};

lambayeque4 = {img_src: "images/lambayeque4.png",
museo: "MUSEO NACIONAL SICÁN ",
contenido: "Aquí se exhiben los objetos hallados en Huaca Loro, sitio donde el investigador japonés Izumi Shimada descubrió dos tumbas de élite de la cultura Sicán, entre los años 1992 – 1995. El museo permite tener una visión general de lo que fue la capital de la cultura Sican en Batán Grande. Se exhibe una maqueta a escala de la Huaca Loro y también cerámica encontrada en el sitio arqueológico.",
direccion: "Av. Batán Grande Cdra 9 Carretera Pítipo.",
telefono: "(074) 500843",
horario: "Martes a domingo de 9:00 a.m. a 5:00 p.m.",
email: "museosican@hotmail.com"};

lambayeque5 = {img_src: "images/lambayeque5.png",
museo: "MUSEO TUMBAS REALES DE SIPÁN ",
link: "www.museotumbasrealessipan.pe",
contenido: "El Museo Tumbas Reales de Sipán, exhibe ornamentos, emblemas y atuendos de rango pertenecientes al personaje llamado el Señor de Sipán.",
direccion: "Av. Juan Pablo Vizcardo y Guzmán Nº 895.",
telefono: "(074) 283977 / (074) 283978",
horario: "lunes a domingo de 9:00 a.m. a 5:00 p.m.",
email: "tumbasdesipan@hotmail.com / tumbasdesipan@gmail.com"};

lambayeque = [lambayeque1, lambayeque2, lambayeque3, lambayeque4, lambayeque5];

/*Estado Lima*/

lima1 = {img_src: "images/lima1.png",
museo: "MUSEO AMANO ",
link: "http://vao.pe/315/museo-amano",
contenido: "La colección que protege esta entidad, está compuesta principalmente por piezas de cerámica y ejemplares de textiles que pertenecieron a las culturas precolombinas que habitaron en Perú. Pero la muestra más importante, que el Museo Amano conserva bajo siete llaves, está compuesta por ejemplares de cerámica y piezas de textiles que en su momento la cultura Chancay desarrolló. Pues la mayoría de las piezas pertenecen a aquellas civilizaciones que florecieron en las costas de Perú.",
direccion: "Calle Retiro 160, Miraflores, Lima. A la altura de la cuadra 11 de la avenida Angamos Oeste.",
telefono: "(511) 441-2909",
horario: "De lunes a viernes de 3:00 a 4:00 p.m."};

lima2 = {img_src: "images/lima2.png",
museo: "MUSEO NACIONAL DE ARQUEOLOGÍA ANTROPOLOGÍA E HISTORIA DEL PERÚ.",
contenido: "El Museo Nacional de Arqueología, Antropología e Historia del Perú fundado en 1822, es el museo más antiguos y representativos del país que expone objetos prehispánicos, artísticos, fondos documentales fotográficos y bibliográficos de la época colonial y republicana.",
direccion: "Plaza Bolívar s/n, Pueblo Libre (frente a la Municipalidad del distrito).",
telefono: "  (511) 463-5070 /(511) 463 7231",
horario: "Martes a sábado de 9:00 am. a 4:00 pm.",
email: "comunicaciones-mnaahp@mcultura.gob.pe"};

lima3 = {img_src: "images/lima3.png",
museo: "MUSEO DE ARTE ITALIANO DE LIMA",
link: "http://www.museos.cultura.pe/museos/museo-de-arte-italiano-de-lima",
contenido: "Es el único museo de arte europeo que se encuentra en nuestro país. Expone desde 1923 todas las expresiones artísticas realizadas por artistas italianos, desde principios del siglo XX.",
direccion: "Av. Paseo de la República 250, Lima..",
telefono: "(01) 423-9932",
horario: "Martes a sábado de 9:00 am. a 4:00 pm.",
email: "museodearteitaliano@ mcultura.gob.pe"};

lima4 = {img_src: "images/lima4.png",
museo: "Museo Nacional de la Cultura Peruana",
contenido: "El Museo expone muestras arqueológicas, etnográficas e histórico-artística de diferentes regiones del país.",
direccion: "Av. Alfonso Ugarte 650, Cercado de Lima.",
telefono: " (511) 423-5892",
horario: "Martes a sábado de 10:00 am. a 5:00 pm.",
email: "mncp@mcultura.gob.pe"};

lima5 = {img_src: "images/lima5.png",
museo: "Museo de Sitio de Pachacamac",
contenido: "El museo expone diversos objetos cerámicos y textiles encontrados durante las investigaciones realizadas en el complejo arqueológico de Pachacamac.",
direccion: "Antigua Panamericana Sur Km. 31.5,  distrito de Lurín.",
telefono: "(511) 430-0168 /(511) 430-2115",
horario: "lunes a domingo de 9:00 a.m. a 5:00 p.m.",
email: "museopachacamac@mcultura.gob.pe"};

lima6 = {img_src: "images/lima6.png",
museo: "Museo de la Nación",
contenido: "El museo expone en sus salas variadas colecciones arqueológicas, históricas y etnográficas de nuestro país, así como obras contemporáneas de artistas nacionales.",
direccion: "Av. Javier Prado Este 2465.",
telefono: "(01) 476-9878",
horario: "Martes a domingos 9:00am a 5:00pm",
email: "museodelanacion@mcultura.gob.pe"};

lima = [lima1, lima2, lima3, lima4, lima5, lima6];