// POPUP
let options = document.querySelectorAll("#optionsPop input");
let labels = document.querySelectorAll("#optionsPop label");
let AllOptions = document.querySelector("#todo");

options.forEach((option) => {
  option.addEventListener("change", function () {
    const label = this.nextElementSibling;
    if (this.checked) {
      label.classList.add("text-placehover");
    } else {
      label.classList.remove("text-placehover");
    }
  });
});

AllOptions.addEventListener("change", function () {
  options.forEach((option) => {
    option.checked = AllOptions.checked;
    const label = option.nextElementSibling;
    if (AllOptions.checked) {
      label.classList.add("text-placehover");
      if (option.id === "todo") {
        label.classList.remove("text-placehover");
      }
    } else {
      label.classList.remove("text-placehover");
    }
  });
});
//Open Popup
var intentos = 0;
var popupNewsletterBlock = document.querySelector("#popup-newsletter-block");
var closePopupNewsletterBtn = document.querySelector(
  "#popup-newsletter-block .close-block"
);
const newsletterBtns = document.querySelectorAll(".newsletter-btn");
var preventPopupInput = document.querySelector(".prevent-popup-input");
var preventPopupBlock = document.querySelector(".prevent-popup-block");

// Función para mostrar el pop-up del boletín de noticias
function mostrarPopupNewsletter() {
  popupNewsletterBlock.classList.add("open");
}
// Función para mostrar el pop-up con el botón
newsletterBtns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    popupNewsletterBlock.classList.add("open");
  });
});

// Función para mostrar la opción "No volver a mostrar" después de tres intentos de salir de la página
function mostrarPreventPopup() {
  if (intentos >= 3) {
    preventPopupBlock.classList.remove("hidden");
  }
}

// Evento click en la casilla de verificación "No volver a mostrar"
if (preventPopupInput) {
  preventPopupInput.addEventListener("change", function () {
    var popupNewsletter = localStorage.getItem("popupNewsletter");
    if (preventPopupInput.checked) {
      localStorage.setItem("popupNewsletter", "prevent");
    } else {
      localStorage.removeItem("popupNewsletter");
    }
  });
}

//! Evento beforeunload para mostrar el pop-up antes de que el usuario intente salir de la página
window.addEventListener("mouseleave", function (e) {
  mostrarPopupNewsletter();
  mostrarPreventPopup(); // Llamamos a la función para controlar la visibilidad del checkbox
});

// Función para cerrar el pop-up del boletín de noticias
if (closePopupNewsletterBtn) {
  closePopupNewsletterBtn.addEventListener("click", function () {
    popupNewsletterBlock.classList.remove("open");
  });
}

// Prevenir el comportamiento predeterminado al hacer clic en el contenido del pop-up del boletín de noticias
popupNewsletterBlock.addEventListener("click", function () {
  popupNewsletterBlock.classList.remove("open");
});

// Evento click fuera del pop-up para cerrarlo
popupNewsletterBlock
  .querySelector(".popup-newsletter-main")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

// Mostrar la opción "No volver a mostrar" después de tres intentos de salir de la página
mostrarPreventPopup();

// *Antes
// // Pop up newsletter
// var popupNewsletterBlock = document.querySelector('#popup-newsletter-block');
// var popupNewsletterMain = document.querySelector('#popup-newsletter-block .popup-newsletter-main');
// var closePopupNewsletterBtn = document.querySelector('#popup-newsletter-block .close-block');
// const newsletterBtns = document.querySelectorAll('.newsletter-btn');
// // console.log(newsletterBtns)

// newsletterBtns.forEach(function (btn) {
//   btn.addEventListener('click', ()=>{
//     popupNewsletterBlock.classList.add('open')
//   })

// })

// //! POPUP ON LOAD
// // window.onload = function () {
// //   if (popupNewsletterBlock) {
// //     setTimeout(function () {
// //       popupNewsletterBlock.classList.add('open');
// //     }, 1000);
// //   }
// // };
// if (closePopupNewsletterBtn) {
//   closePopupNewsletterBtn.addEventListener('click', function () {
//     popupNewsletterBlock.classList.remove('open');
//   });
// }

// // click outside mobile menu, close mobile menu
// if (popupNewsletterBlock) {
//   popupNewsletterBlock.addEventListener('click', function () {
//     popupNewsletterBlock.classList.remove('open');
//   });
// }

// // prevent default behavior when clicking mobile menu
// if (popupNewsletterMain) {
//   popupNewsletterMain.addEventListener('click', function (event) {
//     event.stopPropagation();
//   });
// }

// // Prevent Pop up
// // check for saved 'darkMode' in localStorage
// var popupNewsletter = localStorage.getItem('popupNewsletter');
// localStorage.setItem('popupNewsletter', '');
// var disablePopupNewsletter = function disablePopupNewsletter() {
//   // 1. Add the class to the body
//   document.body.classList.add('prevent-popupNewsletter');
//   // 2. Update popupNewsletter in localStorage
//   localStorage.setItem('popupNewsletter', 'prevent');
// };
// var enablepopupNewsletter = function enablepopupNewsletter() {
//   // 1. Remove the class from the body
//   document.body.classList.remove('prevent-popupNewsletter');
//   // 2. Update popupNewsletter in localStorage
//   localStorage.setItem('popupNewsletter', null);
// };

// // If the user already visited and prevent popupNewsletter
// // start things off with it on
// if (popupNewsletter === 'prevent') {
//   disablePopupNewsletter();
// }

// // When someone clicks the button
// var preventPopupInput = document.querySelector('.prevent-popup-input');
// if (preventPopupInput) {
//   preventPopupInput.addEventListener('change', function () {
//     // get their popupNewsletter setting
//     popupNewsletter = localStorage.getItem('popupNewsletter');

//     // if it not current prevent, enable it
//     if (preventPopupInput.checked) {
//       disablePopupNewsletter();
//       // if it has been prevent, turn it off
//     } else {
//       enablepopupNewsletter();
//     }
//   });
// }

