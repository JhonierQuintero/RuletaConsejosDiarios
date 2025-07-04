const advices = [
  {
    pregunta: "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
    pista: "Permítete imaginar nuevas formas de recibir abundancia, incluso si parecen poco convencionales."
  },
  {
    pregunta: "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
    pista: "El dinero puede llegar cuando te relajas y disfrutas el proceso, no solo cuando te esfuerzas."
  },
  {
    pregunta: "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
    pista: "Observa tus creencias sobre el dinero y pregúntate si realmente son tuyas."
  },
  {
    pregunta: "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
    pista: "Trata al dinero con aprecio y gratitud, como tratarías a alguien especial."
  },
  {
    pregunta: "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
    pista: "Identifica pensamientos o hábitos que te limitan y elige soltarlos, aunque sea por hoy."
  },
  {
    pregunta: "¿Qué es el dinero para mí... y de quién aprendí eso?",
    pista: "Reflexiona sobre el origen de tus creencias y si te siguen sirviendo."
  },
  {
    pregunta: "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
    pista: "Cada juicio es una barrera invisible. ¿Puedes soltar uno hoy?"
  },
  {
    pregunta: "¿Qué me impide reconocer que ya soy una energía de riqueza?",
    pista: "La riqueza empieza por reconocer tu propio valor."
  },
  {
    pregunta: "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
    pista: "La culpa limita el gozo y la abundancia. Permítete disfrutar."
  },
  {
    pregunta: "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
    pista: "Pregunta abierta, permite que el universo te sorprenda."
  },
  {
    pregunta: "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
    pista: "A veces, soltar el control permite que las cosas fluyan mejor."
  },
  {
    pregunta: "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
    pista: "El dinero puede llegar de maneras que nunca imaginaste. Mantente abierta."
  },
  {
    pregunta: "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
    pista: "A veces, lo que evitas es justo lo que necesitas mirar para avanzar."
  },
  {
    pregunta: "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
    pista: "Permítete descubrir nuevas posibilidades más allá de lo aprendido."
  },
  {
    pregunta: "¿Qué pasaría si dejara de rechazar ser rica?",
    pista: "Aceptar tu potencial de riqueza es el primer paso para manifestarla."
  },
  {
    pregunta: "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
    pista: "Imagina tus elecciones sin la limitación del dinero. ¿Qué cambiaría?"
  },
  {
    pregunta: "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
    pista: "Reconoce y suelta patrones familiares que no te benefician."
  },
  {
    pregunta: "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
    pista: "La facilidad y la alegría atraen más de lo mismo. Elige vibrar alto."
  },
  {
    pregunta: "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
    pista: "La gratitud es un imán para la abundancia. Practícala hoy."
  },
  {
    pregunta: "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
    pista: "El dinero no cambia quién eres, solo amplifica tus posibilidades."
  },
  {
    pregunta: "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
    pista: "Abre tu mente a nuevas formas de ver y recibir el dinero."
  },
  {
    pregunta: "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
    pista: "Sé tú mismo y disfruta lo que haces, eso atrae a las personas correctas."
  },
  {
    pregunta: "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
    pista: "Tus talentos pueden ser una fuente de abundancia para ti y para otros."
  },
  {
    pregunta: "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
    pista: "A veces, simplificar tu enfoque puede abrir nuevas puertas."
  },
  {
    pregunta: "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
    pista: "Reconoce tus dones únicos y ponlos al servicio de tu prosperidad."
  },
  {
    pregunta: "¿Qué me impide ser el imán que realmente soy para el dinero?",
    pista: "Confía en tu capacidad de atraer lo que deseas."
  },
  {
    pregunta: "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
    pista: "No necesitas justificar tu deseo de abundancia. Elígelo con libertad."
  },
  {
    pregunta: "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
    pista: "Juega con la energía del dinero y hazlo más ligero en tu vida."
  },
  {
    pregunta: "¿Qué riqueza energética está disponible para mí ahora mismo?",
    pista: "La riqueza no siempre es material. Reconoce la abundancia en todas sus formas."
  },
  {
    pregunta: "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?",
    pista: "Cada pequeña acción cuenta. Da un paso hoy hacia tu prosperidad."
  }
];

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

// Agrega el botón de consejo aleatorio si no existe
let randomBtn = document.getElementById('random-btn');
if (!randomBtn) {
  randomBtn = document.createElement('button');
  randomBtn.className = 'btn btn-random';
  randomBtn.id = 'random-btn';
  randomBtn.innerHTML = '<i class="fas fa-random"></i> Consejo Aleatorio';
  spinButton.parentNode.insertBefore(randomBtn, spinButton.nextSibling);
}

let currentRotation = 0;

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

function createParticles() {
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = particle.style.width;
    particles.appendChild(particle);
  }
}

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

function hasSpunToday() {
  // Puedes activar la restricción diaria si lo deseas
  // const lastSpin = localStorage.getItem('lastSpin');
  // if (!lastSpin) return false;
  // const today = new Date().toDateString();
  // return lastSpin === today;
  return false; // Para pruebas, permite girar siempre
}

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

function spinWheel() {
  if (hasSpunToday()) return;

  const dayOfMonth = new Date().getDate();
  const adjustedDay = (dayOfMonth - 1) % advices.length + 1;
  const segmentAngle = 360 / advices.length;
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

// Mostrar consejo y pista en el modal
function showAdvice(index) {
  adviceText.innerHTML = `
    <strong>${advices[index].pregunta}</strong>
    <br>
    <span style="font-size:1.1rem; color:#f0c420; font-style:normal; display:block; margin-top:1rem;">
      ${advices[index].pista}
    </span>
  `;
  modal.classList.add('active');
}

// Consejo aleatorio
function showRandomAdvice() {
  const randomIndex = Math.floor(Math.random() * advices.length);
  showAdvice(randomIndex);
  successSound.currentTime = 0;
  successSound.play();
  animateParticles();
}

welcomeBtn.addEventListener('click', function() {
  gsap.to(welcomeScreen, {
    opacity: 0,
    duration: 1,
    onComplete: function() {
      welcomeScreen.style.display = 'none';
      updateWheelState();
      ambientSound.volume = 0.2;
      ambientSound.play().catch(()=>{});
    }
  });
});

spinButton.addEventListener('click', spinWheel);
randomBtn.addEventListener('click', showRandomAdvice);

closeModal.addEventListener('click', function() {
  modal.classList.remove('active');
});

modalBtn.addEventListener('click', function() {
  modal.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
  createStars();
  createParticles();
});

window.addEventListener('blur', () => ambientSound.pause());
window.addEventListener('focus', () => ambientSound.play());