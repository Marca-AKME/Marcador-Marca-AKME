//Funcion display markerScreen
function displayMarkerScreen(){
    let divHome = document.getElementById('homeScreen');
    divHome.style.display = 'none';
    let divMarker = document.getElementById('markerScreen');
    divMarker.style.display = 'block';
}
document.getElementById('start').addEventListener('click', displayMarkerScreen);

//funcion return homeScreen
function returnHomeScreen(){
    let divHome = document.getElementById('homeScreen');
    divHome.style.display = 'block';
    let divMarker = document.getElementById('markerScreen');
    divMarker.style.display = 'none';
}
document.getElementById('return').addEventListener('click', returnHomeScreen);