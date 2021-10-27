const showVideo = document.querySelector(".link-video");
const response = document.querySelector(".linkDispo");



showVideo.addEventListener("mouseenter", () => {
  response.classList.add("linkDispoVisible");
})

showVideo.addEventListener("mouseout", () => {
  response.classList.remove("linkDispoVisible");
})

// -----------------------------------------------------------------------

const home1 = document.querySelector(".home1");

window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  if(window.scrollY > 55) {
    home1.style.top = 0;
  } 
})