//PORTFOLIO SLIDER
//Por defecto se mostrara el primer slide
//Este numero cuando sume o reste mostrara otros slides
let slideIndex = 1;
//Funcion del slider pasandole el slide actual
showSlides(slideIndex);

//Funcion para sumar el slideIndex para cambiar el numero del slide saber cual es el actual
function plusSlides(n) {
  showSlides((slideIndex += n));
}
//Funcion para los circulos que indican en que slide estamos actualmente
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  //Cogemos todos los slides
  const slides = document.querySelectorAll(".slide");
  //Cogemos todos los dots
  const dots = document.querySelectorAll(".dot");
  //Si el numero que indica cual es el slide actual es mayor al numero de slides que hay reiniciamos a 1
  if (n > slides.length) slideIndex = 1;
  //Si el numero que indica el slide actual es menor a 1 actualizaremos el current slideIndex al ultimo slide
  if (n < 1) slideIndex = slides.length;
  //Antes de mostrar el slide correspondiente ponemos todos los slides escondidos
  for (const slide of slides) {
    slide.style.display = "none";
  }
  //ponemos todos los dots en gris que quiere decir que no se estan mostrando
  for (const dot of dots) {
    //Quitar el active a todos, active es el dot que esta en otro color por que el slide con la posicion determinada concuerda con el dot
    dot.className = dot.className.replace("active", "");
  }
  //Mostramos el slide correspondiente a partir del slideIndex(posicion)
  //Acceder a posicion a partir del 0 por eso ponemos -1
  slides[slideIndex - 1].style.display = "block";
  //Poner el dot que concuerda con la pos del slide activo
  dots[slideIndex - 1].className += " active";
}

// HABILIDADES ACCORDION

//accedemos a los diferentes elementos accordion button
var acc = document.querySelectorAll(".accordion");

for (const elem of acc) {
  elem.addEventListener("click", function () {
    hidePanel(elem);

    //ir intercambio de clase activeAcc a nada, para mostrar el elemento "-" o el "+" respectivamente segun la situacion
    this.classList.toggle("activeAcc");
    //Coger el elemento panel. que es hijo de accordion
    const panel = this.nextElementSibling;
    //Si el string es vacio o es 0  o null sera false entonces mostraremos el contenido desplegable
    // si hay un valor sera true entonces queremos contraer el contenido pondremos null
    panel.style.maxHeight
      ? (panel.style.maxHeight = null)
      : (panel.style.maxHeight = panel.scrollHeight + "px");
  });
}

//Funcion para esconder todos los paneles y solo se mostrara el panel que se haga click
function hidePanel(actElement) {
  for (const elem of acc) {
    /*todos aquellos elementos que no sean el elemento actual que se esta haciendo
 click reiniciar las propiedades ,es decir, quitar clase active acc y poner a null su height, de esta manera solo se desplegara un panel y todos los demas estaran contraidos*/
    if (!elem.isSameNode(actElement)) {
      elem.classList.remove("activeAcc");
      const panel = elem.nextElementSibling;
      panel.style.maxHeight = null;
    }
  }
}

//CUALIFICACION
//Boton opciones
const estudio = document.querySelector(".estudio-option");
const trabajo = document.querySelector(".trabajo-option");
//Timelines de estudio y trabajo
const estudioTimeline = document.querySelector(".estudio-timeline");
const trabajoTimeline = document.querySelector(".trabajo-timeline");

//Click function div estudio
estudio.addEventListener("click", function () {
  //Esconder timeline estudio
  trabajoTimeline.classList.remove("timelineDisplay");
  //Mostrar timeline trabajo
  estudioTimeline.classList.add("timelineDisplay");
});

//Click function div trabajo
trabajo.addEventListener("click", function () {
  //Esconder timeline trabajo
  estudioTimeline.classList.remove("timelineDisplay");
  //Mostrar timeline estudio
  trabajoTimeline.classList.add("timelineDisplay");
});


//MENU OPTIONS
//3 divs logo , dark mode , menu icon
const menuImg = document.querySelectorAll("header > div:not(.menu-options)");
//div menu options
const menuOptions = document.querySelector(".menu-options");
//close btn menu options
const closeBtn = document.querySelector(".close-menu");
//icon menu display
const menuBtn = document.querySelector(".menu-btn");

//Funcion cerrar menu options , mostrar menu icons con el btn "X"
closeBtn.addEventListener("click" , function () {
  //Esconder menu options
  menuOptions
});

menuBtn.addEventListener("clcik" , function () {
  console.log("menu");
});
