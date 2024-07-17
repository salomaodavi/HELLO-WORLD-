var cont = 0;


$(document).ready(function() {
    $('#color1').click(function() {

        var bgColor = $(this).text().trim();
        $('.container-fluid').css('background-color', bgColor);
        cont=1;
    });


    $('#color2').click(function() {

        var bgColor = $(this).text().trim();
        $('.container-fluid').css('background-color', bgColor);
        cont=2;
    });

    $('#color3').click(function() {

        var bgColor = $(this).text().trim();
        $('.container-fluid').css('background-color', bgColor);
        cont=3;
    });

    $('#color4').click(function() {

        var bgColor = $(this).text().trim();
        $('.container-fluid').css('background-color', bgColor);
        cont=4;
    });

    function getBackgroundColor(element) {
        return window.getComputedStyle(element).backgroundColor;
    }

    $('.btnMude').click(function() {
        var bodyBackgroundColor = getBackgroundColor(document.body);

        if (cont == 4) {
            cont=0;
        }
        if (cont == 3) {
            document.querySelector('.container-fluid').style.backgroundColor = 'rgb(0,0,0)';
            cont++;
        }
        if (cont == 2) {
            document.querySelector('.container-fluid').style.backgroundColor = 'rgb(133,145,116)';
            cont++;
        }
        if (cont == 1) {
            document.querySelector('.container-fluid').style.backgroundColor = 'rgb(244,198,86)';
            cont++;
        }
        if (cont == 0) {
            document.querySelector('.container-fluid').style.backgroundColor = 'rgb(255,247,234)';
            cont++;
            
        }
    });
});