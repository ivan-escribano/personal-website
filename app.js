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
  //color option active
  estudio.classList.add("color-option");
  trabajo.classList.remove("color-option");
  //Esconder timeline estudio
  trabajoTimeline.classList.remove("timelineDisplay");
  //Mostrar timeline trabajo
  estudioTimeline.classList.add("timelineDisplay");
});

//Click function div trabajo
trabajo.addEventListener("click", function () {
  //color option active
  estudio.classList.remove("color-option");
  trabajo.classList.add("color-option");
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
//icons menu
const iconMenu = document.querySelector(".menu-icons");

//Funcion cerrar menu options , mostrar menu icons con el btn "X"
closeBtn.addEventListener("click", function () {
  //Esconder menu options
  iconMenu.classList.toggle("diplayMenu");
  menuOptions.classList.toggle("diplayMenu");
});

menuBtn.addEventListener("click", function () {
  iconMenu.classList.toggle("diplayMenu");
  menuOptions.classList.toggle("diplayMenu");
});

/*Scroll show elements with transition */
//Seleccionar aelementos para añadir el efecto de aparecer en scroll
let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
  //ScrollTop nos indicara cuantos pixels hemos hecho scroll desde el top del elemento especificado(forma vertical)
  let scrollTop = document.documentElement.scrollTop;

  //Cogemos todos los elementos y hacemos un bucle para acceder a todos
  for (const ele of animado) {
    /*Offset top nos devuelve la distancia que hay entre el documento general o nodo y elemento especificado*/
    let alturaAnimado = ele.offsetTop;
    /*
    Cuando los px del scroll desde el documento(scrolltop) sean mayores o lleguen a la posicion 
    del elemento (AlturaAnimado) se aplicaran los estilos para que aparezcan

    para  que aparezcan antes o a nuestra medida iremos jugando con el numero de la posicion 
    altura del elemento (alturaAnimado) para mostrar antes los elementos
     */
    if (alturaAnimado - 300 < scrollTop) {
      ele.style.opacity = 1;
      ele.classList.add("mostrarArriba");
    }
  }
}
//Evento que se realiza siempre que hagamos scroll
window.addEventListener("scroll", mostrarScroll);

//First element transition effect
document.querySelector(".animadoFirst").classList.add("mostrarArriba");

/*Modal*/
const btnModal = document.querySelectorAll(".btn-modal");
const modalCont = document.querySelectorAll(".modal-content");

for (const btn of btnModal) {
  btn.addEventListener("click", showModal);
}

function showModal(e) {
  for (const modal of modalCont) {
    if (modal.id === e.target.id) {
      modal.parentElement.style.display = "flex";
      modal.style.display = "block";
    }
  }
  // console.log(e.target.id);
}

//Close modal...
const xBtn = document.querySelector(".modal-close");
const generalModal = document.querySelector(".cualificacion-modal");
xBtn.addEventListener("click", closeModal);
generalModal.addEventListener("click", closeModal);

function closeModal(e) {
  console.log(e.target);
  console.log(xBtn);
  // e.target === generalModal ||
  if (e.target.isEqualNode(generalModal) || e.target.isEqualNode(xBtn)) {
    generalModal.style.display = "none";
    for (const x of modalCont) {
      x.style.display = "none";
    }
  } else {
    console.log("ERR");
  }
}

//FORM VALIDATION

const formDesktop = document.querySelector(".contact-form-desktop");

formDesktop.addEventListener("submit", checkInput);
//Desktop form var
const username = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("mensaje");

function checkInput(e) {
  e.preventDefault();

  //quitamos espacios en blanco y cogemos el valor del input
  const nameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "") {
    //Pasamos el elemento input
    setErrMsg(username, "El campo esta vacio");
  } else {
    setOkMsg(username);
  }
  if (surnameValue === "") {
    //Pasamos el elemento input
    setErrMsg(surname, "El campo esta vacio");
  } else {
    setOkMsg(surname);
  }
  if (emailValue === "") {
    //Pasamos el elemento input
    setErrMsg(email, "El campo esta vacio");
  } else {
    setOkMsg(email);
  }
  if (phoneValue === "") {
    //Pasamos el elemento input
    setErrMsg(phone, "El campo esta vacio");
  } else {
    setOkMsg(phone);
  }
  if (messageValue === "") {
    //Pasamos el elemento input
    setErrMsg(message, "El campo esta vacio");
  } else {
    setOkMsg(message);
  }
  if (nameValue && surnameValue && emailValue && phoneValue && messageValue) {
    document.forms["formDesk"].submit();
  }
}

//Error output in form
function setErrMsg(input, msg) {
  reset(input);
  input.parentElement.className = "field-form-err";
  //Input err
  input.className = "inputErr showForm";
  //Error icon
  const errIcon = input.nextElementSibling;
  errIcon.className = "errIcon showForm";
  //Error mssg
  const errMsg = errIcon.nextElementSibling;
  errMsg.className = "errText showForm";
  errMsg.firstElementChild.textContent = msg;
}

//OK output in form
function setOkMsg(input) {
  reset(input);
  //Parent container
  const parentContainer = input.parentElement;
  parentContainer.className = "field-form-ok";
  //Input ok
  input.className = "inputOk showForm";
  //div display icon
  parentContainer.lastElementChild.className = "okIcon showForm";
}

//reset function for hiding all elements before applyng err or OK div
function reset(input) {
  const parentContainer = input.parentElement;
  parentContainer.className = "field-form";
  const divs = document.querySelectorAll(`.${parentContainer.className} div`);
  for (const div of divs) {
    div.className = "hideForm";
  }
}
