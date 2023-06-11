const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

function buscar(){
    var texto = document.getElementById('q').value;
    if(texto == 'hyatt' || texto == 'marriot' || texto == 'plaza' || texto == 'conrad' || texto == 'mandarin' || texto == 'sherton'){
        hotel = texto + '.html';
        alert('Ud será redirigido a la página de ' + texto);
        document.location.href=hotel;
    }   else {
        alert('No encontramos el hotel buscado.');
    }
} 