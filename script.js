// Registrar el plugin ScrollTrigger en el núcleo de GSAP
gsap.registerPlugin(ScrollTrigger);

// --- SECCIÓN 1: TIMELINE INTERACTIVA (MEDUSA) ---
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pin-section-1",
        start: "top top",     // Se congela al alinearse arriba de la pantalla
        end: "+=170%",        // Cuánto scroll dura la sección fija
        pin: true,            // Congela la pantalla activa
        scrub: 2,             // Vincula la animación de forma ultra suave al scroll
        anticipatePin: 1
    }
});

tl1.to("#text-box-1", { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" })
   .to("#animal-1", { opacity: 1, scale: 1, rotation: 8, duration: 1.2, ease: "power2.out" }, "-=0.6")
   .to("#examples-1", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.4")
   .to("#animal-1", { y: -35, duration: 1.2, ease: "power1.inOut" });

// --- SECCIÓN 2: TIMELINE INTERACTIVA (CAMALEÓN) ---
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pin-section-2",
        start: "top top",
        end: "+=170%",
        pin: true,
        scrub: 2,
        anticipatePin: 1
    }
});

tl2.to("#animal-2", { opacity: 1, x: 0, scale: 1.05, duration: 1.5, ease: "power2.out" })
   .to("#text-box-2", { opacity: 1, duration: 1.2, ease: "power2.out" }, "-=0.8")
   .to("#animal-2", { y: -35, duration: 1.2, ease: "power1.inOut" });

// --- SECCIÓN 3: TIMELINE INTERACTIVA (ÁGUILA) ---
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pin-section-3",
        start: "top top",
        end: "+=140%",
        pin: true,
        scrub: 2,
        anticipatePin: 1
    }
});

tl3.to("#title-3", { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" })
   .to("#grid-3", { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=0.6")
   .to("#animal-3", { bottom: "25px", opacity: 0.35, scale: 1.15, duration: 1.5, ease: "power1.out" }, "-=1");