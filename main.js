//Funcion ocultar HomeScreen
function ocultarHomeScreen(){
    let div = document.getElementById('homeScreen');
    div.style.display = 'none';
}
document.getElementById('start').addEventListener('click', ocultarHomeScreen);