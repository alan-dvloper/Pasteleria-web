const formulario = document.getElementById('formulario')
const usuario = document.getElementById('usuario')
const correo = document.getElementById('correo')

formulario.addEventListener("submit", e=> {
    e.preventDefault() 
    if(usuario.value == "" || correo.value == "") {
        alertify
        .alert('<a href="" class="mensaje_alert">Información incompleta.</a>', function(){
        alertify.message('<a href="" class="instrucciones-alert-not negativa">Intenta nuevamente <i class="fas fa-exclamation-circle"></i></a>');
    }); 
    }else{
        alertify.confirm('<a href="" class="mensaje_alert">Muy bien!! ahora recibiras notificaciones</a>',
    function(){
    alertify.success('<a href="" class="instrucciones-alert-not positiva">Notificaciones Activadas <i class="fas fa-bell"></i></a>');
    },
    function(){
    alertify.error('<a href="" class="instrucciones-alert-not cancelada">Notificaciones Desactivadas <i class="fas fa-bell-slash"></i></a>');
    });
    }
}) 