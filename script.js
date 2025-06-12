document.addEventListener('DOMContentLoaded', function() {

    // Configuração do Particles.js para o fundo
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "star", "stroke": { "width": 0, "color": "#000000" } },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });

    // Contador de tempo juntos
    const dataInicio = new Date('2022-11-06T00:00:00');
    const contadorElement = document.getElementById('contador');
    function atualizarContador() {
        const agora = new Date();
        const diff = agora - dataInicio;
        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diff % (1000 * 60)) / 1000);
        contadorElement.innerHTML = `<strong>${dias}</strong> dias, <strong>${horas}</strong> horas, <strong>${minutos}</strong> minutos e <strong>${segundos}</strong> segundos de pura felicidade.`;
    }
    setInterval(atualizarContador, 1000);
    atualizarContador();

    // Efeito de digitação para a carta
    const cartaElement = document.getElementById('carta');
    const textoCarta = `Meu amor,\n\nqueria encontrar uma forma diferente de dizer o quanto você é especial. Cada dia ao seu lado é uma nova descoberta. Esta é uma pequena viagem pela nossa história, um lembrete de tudo que construímos e de tudo que ainda vamos viver. \n\nEu te amo.`;
    let i = 0;
    function typeWriter() {
        if (i < textoCarta.length) {
            cartaElement.innerHTML += textoCarta.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Velocidade da digitação
        } else {
            cartaElement.style.borderRight = 'none'; // Remove o cursor ao final
        }
    }
    
    // Animação de Fade-in ao rolar a página
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2, // A animação começa quando 20% do elemento está visível
        rootMargin: "0px 0px -50px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                if (entry.target.contains(cartaElement) && i === 0) {
                     // Inicia a digitação da carta quando a seção se torna visível
                    typeWriter();
                }
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});