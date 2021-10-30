//Funcion ocultar HomeScreen
function ocultarHomeScreen(){
    let divHome = document.getElementById('homeScreen');
    divHome.style.display = 'none';
    let divMarker = document.getElementById('markerScreen')
    divMarker.style.display = 'block';
}
document.getElementById('start').addEventListener('click', ocultarHomeScreen);