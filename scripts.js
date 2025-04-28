// JavaScript Document
       let index = 0;
        const slides = document.querySelectorAll(".slide");

        function showSlide(n) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === n) slide.classList.add("active");
            });
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            showSlide(index);
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        }

        function openModal() {
            document.getElementById("modal").style.display = "flex";
        }

        function closeModal() {
            document.getElementById("modal").style.display = "none";
        }
function MiFuncion() {
  // aquí se define el ID del elemento que va a tomar la clase
  var x = document.getElementById("navegador");
  if (x.className === "") {
    // esta es la clase que se agrega al elemento con el
    id="navegador"
    x.className += "mostrarmenu";
    } else {
    x.className = "";
    }
 }


window.addEventListener("scroll", function() {
        const header = document.getElementById("encabezado");
        if (window.scrollY > 50) {
            header.classList.add("menuchico");
        } else {
            header.classList.remove("menuchico");
        }
    });
