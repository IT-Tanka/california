const barCoctails=document.querySelectorAll('.bar__coctail-title');
const barPoster=document.querySelector('.bar__menu-poster');
const imgCoctailArr=['coctail.jpg','otvertka.jpg','appl-tonic.jpg','djin-tonic.jpg'];
console.log('barCoctails: ', barCoctails);

barCoctails.forEach((item, i) => {
  item.addEventListener('mouseover', ()=>{
    console.log('click');
    item.style.color='white';
    barPoster.style.backgroundImage=`url(img/${imgCoctailArr[i]})`;
  });
  item.addEventListener('mouseout', ()=>{
    console.log('click');
    item.style.color='#D6258F';
  });
})