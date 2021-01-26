function cumples(){

    const http = new XMLHttpRequest();
    const url = 'http://localhost/pasteleria-nicole/public/cumples.html';

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById('productos-ajax').innerHTML = this.responseText;
        }
    }
    http.open("GET",url);
    http.send();
}
document.getElementById("btn-ajax-categorias-cumples").addEventListener("click",function(){
    cumples();
});