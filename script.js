const container = document.querySelector('.container');
const input = document.querySelector('#gridLayout');
const color = document.querySelector('#colorpicker');
const gridsize = document.querySelector('.gridsize');
const circlebtn = document.querySelector('.circle');
const togglebtn = document.querySelector('.toggle'); 
const eraserbtn = document.querySelector('.eraser')
const rainbowbtn = document.querySelector('.rainbow')

var x = input.value; 
 
function grid(x){
  x = input.value;
  for(let i =0; i<x*x; i++){
    const innerdiv = document.createElement('div');
    innerdiv.style.cssText = `width: ${550/x}px; height:${550/x}px;`
    innerdiv.classList.add('innerdiv');
    container.appendChild(innerdiv);
    container.addEventListener("mousedown", ()=>{
      innerdiv.addEventListener("mouseover", colorchoice);
    })
    rainbowbtn.addEventListener("click", ()=>{
      innerdiv.addEventListener("mousemove", rainbow)
    })
  }
  gridsize.innerText = `${x} * ${x}`;
}
 
function settings(){ 
  const innerdivs = document.querySelectorAll('.innerdiv');

  for(let j=0; j<innerdivs.length; j++){

    circlebtn.addEventListener("click", ()=>{
      if(innerdivs[j].style.borderRadius == ""){
        innerdivs[j].style.borderRadius = "50%";
      }
      else innerdivs[j].style.borderRadius = '';
    })

    togglebtn.addEventListener("click", ()=>{
      if(innerdivs[j].style.border == "1px solid grey"){
        innerdivs[j].style.border = "none";
      }
      else innerdivs[j].style.border = "1px solid grey";
    })

  }
}

eraserbtn.addEventListener("click", ()=>{
  color.value = "#000000";
});

input.addEventListener("change", ()=>{
  container.innerHTML= "";
  grid(x);
  settings();
})

function colorchoice(y){
  this.style.backgroundColor = color.value;
}

function rainbow(){
  this.style.backgroundColor = randomcolor();
}

function randomcolor(){
  let nums = "0123456789ABCDEF";
  let color = "#";
  for(let i=0; i<6 ; i++){
    color += nums[Math.floor(Math.random()*16)];
  }
  return color;
}


grid(x);
settings();
