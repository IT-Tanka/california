const barCoctails=document.querySelectorAll('.bar__coctail-title');
const barPosterImgs=document.querySelectorAll('.bar__menu-img');

barPosterImgs[0].style.opacity='1';
barCoctails.forEach((item, i) => {
  item.addEventListener('mouseover', ()=>{
    item.style.color='white';
    
    for (let j=0; j<=4; j++){
      barPosterImgs[j].style.opacity='0';
    };
    
    barPosterImgs[i+1].style.opacity='1';
  });
  item.addEventListener('mouseout', ()=>{
    item.style.color='#D6258F';
  });
});

// Подключение карты Leaflet

const map = L.map('map', {scrollWheelZoom:false}).setView([46.47802567837957, 30.738858285596844],18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19,
    // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
  
const greenIcon = L.icon({
    iconUrl: 'img/icon.svg',
    iconSize:     [48, 48], // size of the icon
    iconAnchor:   [46, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [2, -27] // point from which the popup should open relative to the iconAnchor
  });
L.marker([46.47802567837957, 30.738858285596844], {icon: greenIcon}).addTo(map).bindPopup('CALIFORNIA');
