document.addEventListener("DOMContentLoaded", () => {
    const cajas = document.querySelectorAll(".caja");
  
    cajas.forEach((caja) => {
      const subcaja = caja.querySelector(".subcaja");
      const icono = caja.querySelector(".icono img");
      const texto = caja.querySelector(".texto");
  
      subcaja.addEventListener("click", () => {
        // Cerrar otras cajas abiertas
        cajas.forEach((otraCaja) => {
          if (otraCaja !== caja) {
            const otroTexto = otraCaja.querySelector(".texto");
            const otroIcono = otraCaja.querySelector(".icono img");
            otroTexto.classList.remove("mostrar");
            otroIcono.src = "assets/images/icon-plus.svg";
          }
        });
  
        // Alternar estado actual
        const estaAbierto = texto.classList.contains("mostrar");
        texto.classList.toggle("mostrar", !estaAbierto);
        icono.src = estaAbierto
          ? "assets/images/icon-plus.svg"
          : "assets/images/icon-minus.svg";
      });
    });
  });
  