const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

function buscar(){
    let texto_original = document.getElementById('q').value;
    let texto = texto_original.toLowerCase();

    if(texto == 'hyatt' || texto == 'four seasons' || texto == 'plaza' || texto == 'conrad' || texto == 'mandarin' || texto == 'sheraton'){
        hotel = texto + '.html';
        alert('Usted será redirigido a la página del Hotel ' + texto);
        document.location.href=hotel;
    }   else {
        alert('No encontramos el hotel buscado.');
    }
} 

var input = document.getElementById('q');

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("buscarButton").click();
  }
});

function foco_en_q(){
    setTimeout(function(){
    document.getElementById('q').focus();
}, 500);
}