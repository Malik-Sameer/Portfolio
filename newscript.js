function onClickMenu(){
    document.getElementById("nav-manu").classList.toggle("active")
    document.getElementById("hamburger").classList.toggle("active")
    document.getElementById("total").classList.toggle("active")
}
//sliderjs

const sliderContainers = [...document.querySelectorAll('.slider-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

sliderContainers.forEach((item, i) => {
   let containerDimensions = item.getBoundingClientRect();
   let containerwidth = containerDimensions.width;

   nxtBtn[i].addEventListener('click',() =>{
       item.scrollLeft += containerwidth;
   })

   preBtn[i].addEventListener('click',() =>{
       item.scrollLeft -= containerwidth;
   })

})