// Array con los consejos
const advices = [
  "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
  "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
  "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
  "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
  "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
  "¿Qué es el dinero para mí... y de quién aprendí eso?",
  "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
  "¿Qué me impide reconocer que ya soy una energía de riqueza?",
  "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
  "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
  "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
  "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
  "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
  "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
  "¿Qué pasaría si dejara de rechazar ser rica?",
  "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
  "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
  "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
  "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
  "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
  "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
  "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
  "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
  "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
  "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
  "¿Qué me impide ser el imán que realmente soy para el dinero?",
  "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
  "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
  "¿Qué riqueza energética está disponible para mí ahora mismo?",
  "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?"
];

// Elementos DOM
const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spin-button');
const modal = document.getElementById('modal');
const adviceText = document.getElementById('advice-text');
const closeModal = document.getElementById('close-modal');
const modalBtn = document.getElementById('modal-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const welcomeBtn = document.getElementById('welcome-btn');
const message = document.getElementById('message');
const particles = document.getElementById('particles');
const spinSound = document.getElementById('spin-sound');
const successSound = document.getElementById('success-sound');
const ambientSound = document.getElementById('ambient-sound');

// Variable para la rotación acumulada de la ruleta
let currentRotation = 0;

// Crear estrellas de fondo
function createStars() {
  const stars = document.querySelector('.stars');
  const count = 200;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    stars.appendChild(star);
  }
}

// Crear partículas
function createParticles() {
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = particle.style.width;
    particles.appendChild(particle);
  }
}

// Animar partículas
function animateParticles() {
  const particleElements = document.querySelectorAll('.particle');
  particleElements.forEach(particle => {
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    const endX = startX + (Math.random() - 0.5) * window.innerWidth;
    const endY = startY + (Math.random() - 0.5) * window.innerHeight;
    gsap.to(particle, {
      x: endX - startX,
      y: endY - startY,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 2 + 1,
      delay: Math.random(),
      ease: "power1.out",
      onComplete: function() {
        gsap.to(particle, {
          opacity: 0,
          duration: 1
        });
      }
    });
  });
}

// Comprobar si el usuario ya ha girado hoy
function hasSpunToday() {
  // Descomenta esto para activar la restricción:
  // const lastSpin = localStorage.getItem('lastSpin');
  // if (!lastSpin) return false;
  // const today = new Date().toDateString();
  // return lastSpin === today;
  return false; // Para pruebas, permite girar siempre
}

// Actualizar el estado de la ruleta
function updateWheelState() {
  if (hasSpunToday()) {
    spinButton.disabled = true;
    message.textContent = "Vuelve mañana para un nuevo consejo";
    const dayOfMonth = new Date().getDate();
    const index = (dayOfMonth - 1) % advices.length;
    showAdvice(index);
  } else {
    spinButton.disabled = false;
    message.textContent = "";
  }
}

// Girar la ruleta (ahora siempre gira correctamente)
function spinWheel() {
  if (hasSpunToday()) return;

  const dayOfMonth = new Date().getDate();
  const adjustedDay = (dayOfMonth - 1) % 30 + 1;
  const segmentAngle = 360 / 30;
  const targetAngle = 360 - (adjustedDay - 1) * segmentAngle;

  gsap.set(wheel, { rotation: 0 });
  
  const spinDegrees = 1080 + targetAngle;

  spinSound.currentTime = 0;
  spinSound.play();

  gsap.to(wheel, {
    rotation: spinDegrees,
    duration: 5,
    ease: "power2.out",
    onComplete: function() {
      spinSound.pause();
      spinSound.currentTime = 0;
      gsap.set(wheel, { rotation: targetAngle });
      // Descomenta para activar la restricción
      // localStorage.setItem('lastSpin', new Date().toDateString());
      const index = (dayOfMonth - 1) % advices.length;
      showAdvice(index);
      successSound.currentTime = 0;
      successSound.play();
      animateParticles();
      updateWheelState();
    }
  });
}
// Mostrar el consejo en el modal
function showAdvice(index) {
  adviceText.textContent = advices[index];
  modal.classList.add('active');
}

// Event listeners
welcomeBtn.addEventListener('click', function() {
  gsap.to(welcomeScreen, {
    opacity: 0,
    duration: 1,
    onComplete: function() {
      welcomeScreen.style.display = 'none';
      updateWheelState();
      // Sonido ambiente solo tras interacción del usuario
      ambientSound.volume = 0.2;
      ambientSound.play().catch(()=>{});
    }
  });
});

spinButton.addEventListener('click', spinWheel);

closeModal.addEventListener('click', function() {
  modal.classList.remove('active');
});

modalBtn.addEventListener('click', function() {
  modal.classList.remove('active');
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  createStars();
  createParticles();
});

// Opcional: Pausar sonido ambiente cuando se cambia de pestaña
window.addEventListener('blur', () => ambientSound.pause());
window.addEventListener('focus', () => ambientSound.play());