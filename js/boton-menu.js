$(document).ready(main);

let contador = 1
function main() {
    $('.contenedor-menu').click(function(){
        if(contador == 1) {
            $('nav').animate({
                left: '0'
            })
            contador = 0
        }else{
            contador = 1
            $('nav').animate({
                left: '-100%'
            })
        }
    })
}