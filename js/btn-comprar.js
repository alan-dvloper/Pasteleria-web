$(document).ready(function(){
    $("#comprar, #comprar-2 ,#comprar-3, #comprar-4, #comprar-5, #comprar-6").click(function(){
        
    alertify
        .alert("Por ahora no estamos haciendo entregas a domicilio por si quieres comprar esté producto u otro, tendras que presentarte en nuestra pastelería fisica de 11:00:am a 20:00:pm, gracias por su comprensión.", function(){
        alertify.message('Gracias');
        });
    })
})