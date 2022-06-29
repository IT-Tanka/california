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
