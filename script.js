const container = document.querySelector('.container');
const input = document.querySelector('#gridLayout');
const color = document.querySelector('#colorpicker');
const colorbtn = document.querySelector('.colorchoice')
const gridsize = document.querySelector('.gridsize');
const circlebtn = document.querySelector('.circle');
const togglebtn = document.querySelector('.toggle'); 
const eraserbtn = document.querySelector('.eraser');
const rainbowbtn = document.querySelector('.rainbow');
const buttons = document.querySelectorAll('button');

var x = input.value; 
 
function grid(x){
  x = input.value;
  for(let i =0; i<x*x; i++){
    const innerdiv = document.createElement('div');
    innerdiv.style.cssText = `width: ${550/x}px; height:${550/x}px;`
    innerdiv.classList.add('innerdiv');
    container.appendChild(innerdiv);
  }
  gridsize.innerText = `${x} * ${x}`;
}
 
function settings(){ 
  const innerdivs = document.querySelectorAll('.innerdiv');

  for(let i=0; i<innerdivs.length; i++){

    circlebtn.addEventListener("click", ()=>{
      if(innerdivs[i].style.borderRadius == ""){
        innerdivs[i].style.borderRadius = "50%";
      }
      else innerdivs[i].style.borderRadius = '';
    })

    togglebtn.addEventListener("click", ()=>{
      if(innerdivs[i].style.border == "1px solid grey"){
        innerdivs[i].style.border = "none";
      }
      else innerdivs[i].style.border = "1px solid grey";
    })
  }
}

input.addEventListener("change", ()=>{
  container.innerHTML= "";
  grid(x);
  settings();
})

function randomcolor(){
  let nums = "0123456789ABCDEF";
  let color = "#";
  for(let i=0; i<6 ; i++){
    color += nums[Math.floor(Math.random()*16)];
  }
  return color;
}


rainbowbtn.addEventListener("click", function(){
  const innerdivs = container.children;
  for(let i=0; i< innerdivs.length; i++){
    innerdivs[i].addEventListener("mouseover", ()=>{
      innerdivs[i].style.backgroundColor = randomcolor();
    })
  }
})

colorbtn.addEventListener("click", function(){
  const innerdivs = container.children;
  for(let i=0; i<innerdivs.length; i++){
    innerdivs[i].addEventListener("mouseover", ()=>{
      innerdivs[i].style.backgroundColor = color.value;
    })
  }
})

eraserbtn.addEventListener("click", function(){
  const innerdivs = container.children;
  for(let i=0; i<innerdivs.length; i++){
    innerdivs[i].addEventListener("mouseover", ()=>{
      innerdivs[i].style.backgroundColor = "#000000";
    })
  }
})

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    });
});


grid(x);
settings();
