let tl = gsap.timeline();



let block_incog = document.querySelectorAll(".poligono_incognito");
let block = document.querySelectorAll(".poligono_block");

// Asignamos el mismo handler a ambos grupos
[...block_incog, ...block].forEach(el => {
  el.addEventListener('click', () => blockClick(el));
});

function blockClick(el) {
  let tl = gsap.timeline();
  tl.to(".plano", {
    height: 600,
    width: 700,
    duration: 0.2,
    ease: "lineal"
  });
  tl.to(el, {
    y: -50, duration: 0.2
  });
  tl.to(el,
    {
      y: -20,
      duration: 0.5,

      ease: "power1.out"
    }

  );
  tl.to(".coin",
    {
      y: -200,
      duration: 1,
      opacity: 1
    },
    "-=0.8" // empieza 0.5s antes de que termine la animación anterior
  );
  tl.to(".coin",
    {
      y: -150,
      duration: 0.8,
      ease: "bounce.out" // rebote suave al caer
    }// empieza 0.5s antes de que termine la animación anterior
  );


}
