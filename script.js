// Registrar el plugin ScrollTrigger en el núcleo de GSAP
gsap.registerPlugin(ScrollTrigger);

// Variable para controlar si es un dispositivo móvil
const isMobile = window.innerWidth < 768;

// --- SECCIÓN 1: METAZOARIOS (MEDUSA) ---
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pin-section-1",
        start: isMobile ? "top 80%" : "top top",     
        end: isMobile ? "bottom center" : "+=180%",        
        pin: !isMobile, // Desactiva el pin rígido en móviles para permitir scroll natural            
        scrub: 1.5,
        anticipatePin: 1
    }
});

tl1.to("#text-box-1", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
   .to("#animal-1", { opacity: 1, scale: 1, rotation: 4, duration: 1.4, ease: "expo.out" }, "-=0.8")
   .to("#examples-1", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5");

if (!isMobile) {
    tl1.to("#animal-1", { y: -40, scale: 0.95, duration: 1.2, ease: "power1.inOut" });
}

// --- SECCIÓN 2: FILOGENIA (CAMALEÓN) ---
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pin-section-2",
        start: isMobile ? "top 80%" : "top top",
        end: isMobile ? "bottom center" : "+=180%",
        pin: !isMobile,
        scrub: 1.5,
        anticipatePin: 1
    }
});

tl2.to("#animal-2", { opacity: 1, scale: isMobile ? 1 : 1.1, rotation: -3, duration: 1.5, ease: "expo.out" })
   .to("#text-box-2", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.9");

if (!isMobile) {
    tl2.to("#animal-2", { y: -30, scale: 1.02, duration: 1.2, ease: "power1.inOut" });
}

// --- SECCIÓN 3: ECOSISTEMAS ---
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pin-section-3",
        start: isMobile ? "top 80%" : "top top",
        end: isMobile ? "bottom center" : "+=150%",
        pin: !isMobile,
        scrub: 1.5,
        anticipatePin: 1
    }
});

tl3.to("#title-3", { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power4.out" })
   .to("#grid-3", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, "-=0.7");