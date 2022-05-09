const container = document.querySelector('.container');
const input = document.querySelector('#gridLayout');
const color = document.querySelector('#colorpicker');
const gridsize = document.querySelector('.gridsize');

var x = input.value; 

function grid(x){
  x = input.value;
  for(let i =0; i<x*x; i++){
    const innerdiv = document.createElement('div');
    innerdiv.style.cssText = `width: ${550/x}px; height:${550/x}px;`
    innerdiv.classList.add('innerdiv');
    container.appendChild(innerdiv);
  }
  const innerdiv = document.querySelectorAll('.innerdiv');

  for(let j=0; j<innerdiv.length; j++){
      innerdiv[j].addEventListener("mouseover", ()=>{
      innerdiv[j].style.background = color.value;
    })
  }
  gridsize.innerText = `${x} * ${x}`
}

input.addEventListener("change", ()=>{

  container.innerHTML= "";

  grid(x);

})

grid(x);


