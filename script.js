// Animación suave al aparecer elementos al hacer scroll

const elements = document.querySelectorAll(
".section, .card, .project, .steps div, .hero-image, .hero-text"
);


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15

});



elements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});




// Efecto movimiento leve del mouse sobre la foto

const photo = document.querySelector(".image-wrapper");


document.addEventListener("mousemove",(e)=>{


if(!photo) return;


const x = (window.innerWidth / 2 - e.clientX) / 80;

const y = (window.innerHeight / 2 - e.clientY) / 80;


photo.style.transform =
`rotate(3deg) translate(${x}px, ${y}px)`;


});
