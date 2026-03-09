
const baseDatos = [
    {
        titulo: "1. Continuidad en Estructuras",
        videoUrl: "https://www.youtube.com/embed/-48n3f-xJcM", 
        teoria: `
            <p>En el diseño estructural, la <strong>continuidad</strong> garantiza que no existan puntos de quiebre o interrupciones bruscas en elementos como vigas o rampas.</p>
            <p>Una función \\( f(x) \\) es continua en un punto \\( x = a \\) si cumple la triple igualdad:</p>
            <div class="formula-box">\\( \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a) \\)</div>
            <p>Mira el siguiente video para entender cómo analizar si una función se "rompe" o no gráficamente:</p>
        `,
        ejercicio: {
            enunciado: "Determinar si la unión de dos vigas es continua en el punto x = 2, si su perfil es:",
            formula: "f(x) = \\begin{cases} x^2 + 1 & x < 2 \\\\ 5 & x \\ge 2 \\end{cases}",
            pasos: [
                { h: "Paso 1: Límite por la izquierda (x < 2)", p: "\\( \\lim_{x \\to 2^-} (x^2 + 1) = 2^2 + 1 = 5 \\)" },
                { h: "Paso 2: Límite por la derecha y función real (x ≥ 2)", p: "\\( f(2) = 5 \\)" },
                { h: "Conclusión", p: "Como los límites coinciden (5 = 5), la estructura es perfectamente continua en la unión." }
            ]
        },
        preguntas: [
            { q: "Resuelve: Si f(x) = (x² - 9)/(x - 3) para x ≠ 3. ¿Qué valor exacto debe tomar f(3) para que la función sea continua y no haya una fractura en x=3?", opciones: ["6", "0", "9", "3"], correcta: 0 },
            { q: "Calcula el valor de la constante 'k' para que la función sea continua en x=2: f(x) = { kx  si x < 2 ;  x²  si x ≥ 2 }", opciones: ["k = 2", "k = 4", "k = 1", "k = 0"], correcta: 0 },
            { q: "Dada la función de carga h(x) = 1 / (x - 5). ¿Qué ocurre exactamente en x = 5?", opciones: ["Hay una discontinuidad infinita (asíntota)", "Es continua y vale 0", "Hay una discontinuidad evitable", "Vale 1"], correcta: 0 },
            { q: "Evalúa el límite: lim (x→0) [sin(4x) / x]. Este cálculo es vital para empalmar dos curvas suaves.", opciones: ["4", "1", "0", "No existe"], correcta: 0 },
            { q: "Si la temperatura T de un material cambia según T(t) = (t² - 2t) / t. ¿Cuál es el límite real de T cuando el tiempo t tiende a 0?", opciones: ["-2", "0", "2", "Infinito"], correcta: 0 }
        ]
    },
    {
        titulo: "2. Derivadas Parciales",
        videoUrl: "https://www.youtube.com/embed/RdxXv3lFjls", 
        teoria: `
            <p>En superficies 3D (como cubiertas de edificios o terrenos), la <strong>derivada parcial</strong> calcula la inclinación o pendiente si caminamos exclusivamente en la dirección de un eje (X o Y).</p>
            <div class="formula-box">
                Vector Gradiente (Máxima Pendiente):<br>
                \\( \\nabla f(x,y) = \\left\\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right\\rangle \\)
            </div>
            <p>Este video explica perfectamente cómo derivar una variable mientras asumes que las demás son solo números fijos:</p>
        `,
        ejercicio: {
            enunciado: "Hallar la pendiente en la dirección del eje X de una cúpula definida por \\( z = x^2y + y^3 \\) en el punto (3, 2).",
            formula: "z = x^2y + y^3",
            pasos: [
                { h: "Paso 1: Derivar parcialmente respecto a X", p: "Tratamos a 'y' como un número constante. La derivada de \\( x^2 \\) es \\( 2x \\), por lo tanto: \\( \\frac{\\partial z}{\\partial x} = 2xy + 0 \\)" },
                { h: "Paso 2: Evaluar en el punto (x=3, y=2)", p: "\\( f_x(3,2) = 2(3)(2) = 12 \\)" },
                { h: "Conclusión", p: "La pendiente en esa dirección es de 12. Es una subida muy pronunciada." }
            ]
        },
        preguntas: [
            { q: "Calcula la derivada parcial respecto a 'x' (∂f/∂x) para la función f(x,y) = 3x²y³ - 5y + 2x.", opciones: ["6xy³ + 2", "9x²y² + 2", "6xy³ - 5", "3x²y² + 2"], correcta: 0 },
            { q: "Calcula la derivada parcial respecto a 'y' (∂f/∂y) para la función f(x,y) = sin(xy).", opciones: ["x·cos(xy)", "y·cos(xy)", "cos(xy)", "-x·sin(xy)"], correcta: 0 },
            { q: "Halla el vector gradiente ∇f(x,y) para f(x,y) = x² + y² evaluado en el punto (1, 2).", opciones: ["⟨2, 4⟩", "⟨1, 2⟩", "⟨4, 2⟩", "⟨2, 2⟩"], correcta: 0 },
            { q: "Calcula la derivada cruzada ∂²f/(∂x∂y) de la función f(x,y) = x³y².", opciones: ["6x²y", "3x²y", "2x³", "6xy²"], correcta: 0 },
            { q: "Evalúa ∂f/∂x en el punto (e, 1) para la función f(x,y) = y·ln(x).", opciones: ["1/e", "e", "1", "0"], correcta: 0 }
        ]
    },
    {
        titulo: "3. Integración (Sustitución)",
        videoUrl: "https://www.youtube.com/embed/-W3nOBeWNMU", 
        teoria: `
            <p>Se utiliza para calcular áreas acumuladas y longitudes complejas. El método de <strong>Sustitución (o cambio de variable)</strong> simplifica integrales eligiendo una parte como \\( u \\) para que su derivada \\( du \\) elimine el resto de las variables.</p>
            <div class="formula-box">\\( \\int f(g(x)) \\cdot g'(x) dx = \\int f(u) du \\)</div>
            <p>Si sientes que las integrales son un dolor de cabeza, mira este video con el truco definitivo para hacer cambios de variable:</p>
        `,
        ejercicio: {
            enunciado: "Calcular la acumulación de material definida por la integral indefinida:",
            formula: "\\int 2x(x^2 + 5)^4 dx",
            pasos: [
                { h: "Paso 1: Definir el cambio de variable", p: "Elegimos lo que está dentro del paréntesis: \\( u = x^2 + 5 \\). Su derivada es \\( du = 2x dx \\)." },
                { h: "Paso 2: Sustituir en la integral", p: "La integral se transforma en una regla de potencia simple: \\( \\int u^4 du \\)" },
                { h: "Paso 3: Integrar y volver a la variable original", p: "Integramos: \\( \\frac{u^5}{5} + C \\). Sustituyendo 'u': \\( \\frac{(x^2 + 5)^5}{5} + C \\)." }
            ]
        },
        preguntas: [
            { q: "Resuelve la integral indefinida: ∫ 2x·cos(x²) dx usando u = x².", opciones: ["sin(x²) + C", "-sin(x²) + C", "x²·sin(x) + C", "cos(x²) + C"], correcta: 0 },
            { q: "Calcula la integral: ∫ e^(3x) dx.", opciones: ["(1/3)e^(3x) + C", "3e^(3x) + C", "e^(3x) + C", "(1/4)e^(4x) + C"], correcta: 0 },
            { q: "Evalúa la integral definida: ∫(de 0 a 1) 3x²(x³+1)² dx. (Pista: usa u = x³+1).", opciones: ["7/3", "8/3", "2", "3"], correcta: 0 },
            { q: "Resuelve la integral: ∫ (1/x)·ln(x) dx.", opciones: ["[ln(x)]² / 2 + C", "ln(x) + C", "1/x² + C", "x·ln(x) - x + C"], correcta: 0 },
            { q: "¿Qué resultado obtienes al integrar ∫ x/√(x²+4) dx?", opciones: ["√(x²+4) + C", "2√(x²+4) + C", "1/√(x²+4) + C", "ln|x²+4| + C"], correcta: 0 }
        ]
    },
    {
        titulo: "4. Área entre Funciones",
        videoUrl: "https://www.youtube.com/embed/3jTd3VaG6WI", 
        teoria: `
            <p>Para determinar la cantidad de material de una fachada acotada por dos diseños curvos, integramos la diferencia entre la curva superior y la inferior en un intervalo dado.</p>
            <div class="formula-box">\\( Área = \\int_{a}^{b} [f(x)_{Superior} - g(x)_{Inferior}] dx \\)</div>
            <p>Mira esta explicación visual de cómo restar las funciones para encontrar el área sombreada correcta:</p>
        `,
        ejercicio: {
            enunciado: "Hallar el área del plano comprendido entre la recta \\( y = x \\) y la parábola \\( y = x^2 \\) desde x=0 hasta x=1.",
            formula: "A = \\int_{0}^{1} (x - x^2) dx",
            pasos: [
                { h: "Paso 1: Identificar superior e inferior", p: "En el tramo de 0 a 1, la recta \\( x \\) es mayor (superior) que la parábola \\( x^2 \\)." },
                { h: "Paso 2: Calcular la antiderivada", p: "Integramos la diferencia: \\( \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right] \\)" },
                { h: "Paso 3: Evaluar los límites (Teorema Fundamental)", p: "Evaluamos en 1 y restamos la evaluación en 0: \\( (\\frac{1^2}{2} - \\frac{1^3}{3}) - 0 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6} \\)." }
            ]
        },
        preguntas: [
            { q: "Calcula el área delimitada entre la parábola y = x² y la recta horizontal y = 4. (Encuentra primero los puntos de corte).", opciones: ["32/3", "16/3", "8", "12"], correcta: 0 },
            { q: "Halla el área encerrada entre y = √x e y = x² en el primer cuadrante.", opciones: ["1/3", "1/2", "1/6", "2/3"], correcta: 0 },
            { q: "Calcula el área de la región comprendida entre y = x³ y el eje X, desde x = 0 hasta x = 2.", opciones: ["4", "8", "2", "16/3"], correcta: 0 },
            { q: "Calcula el área encerrada entre las curvas y = sin(x) y y = cos(x) desde x = 0 hasta x = π/4. (Sabiendo que cos(x) va por arriba).", opciones: ["√2 - 1", "√2", "1", "1 - √2/2"], correcta: 0 },
            { q: "Encuentra el área entre la recta y = 2x y el eje X en el intervalo de x=1 a x=3.", opciones: ["8", "4", "10", "6"], correcta: 0 }
        ]
    },
    {
        titulo: "5. Regla de Simpson",
        videoUrl: "https://www.youtube.com/embed/WosPey6VaDs", 
        teoria: `
            <p>Es un método de aproximación numérica indispensable cuando calculamos áreas de terrenos topográficos donde no existe una función matemática exacta, solo mediciones.</p>
            <p>Aproxima los bordes usando arcos parabólicos. Por regla estricta, el número de intervalos <strong>(n) debe ser par</strong>.</p>
            <div class="formula-box">\\( \\int_{a}^{b} f(x)dx \\approx \\frac{h}{3} \\Big[ f_0 + 4f_1 + 2f_2 + 4f_3 + ... + f_n \\Big] \\)</div>
            <p>¿Aún te confunden los coeficientes (1, 4, 2, 4...)? Chequea este ejemplo numérico súper fácil:</p>
        `,
        ejercicio: {
            enunciado: "Aproximar el área bajo la curva \\( f(x) = x^4 \\) en el intervalo [0, 2] usando Simpson 1/3 con n=2 intervalos.",
            formula: "h = \\frac{b - a}{n} = \\frac{2 - 0}{2} = 1",
            pasos: [
                { h: "Paso 1: Definir los puntos a evaluar", p: "Como h=1, los puntos en el eje X son: \\( x_0=0, x_1=1, x_2=2 \\)." },
                { h: "Paso 2: Evaluar la función en esos puntos", p: "\\( f(0)=0^4=0 \\) <br> \\( f(1)=1^4=1 \\) <br> \\( f(2)=2^4=16 \\)" },
                { h: "Paso 3: Aplicar la fórmula de Simpson", p: "\\( \\text{Área} = \\frac{1}{3} [0 + 4(1) + 16] = \\frac{1}{3} [20] = 6.66 \\) unidades cuadradas." }
            ]
        },
        preguntas: [
            { q: "Aplica la Regla de Simpson 1/3 para aproximar ∫(de 0 a 2) x² dx usando n=2 intervalos. ¿Cuál es el resultado?", opciones: ["8/3", "2", "3", "4"], correcta: 0 },
            { q: "Si integras de a=0 a b=4 con n=4 intervalos. ¿Cuánto vale 'h' (el tamaño del paso)?", opciones: ["1", "0.5", "2", "4"], correcta: 0 },
            { q: "Tienes los siguientes datos tabulados para f(x): f(0)=2, f(1)=5, f(2)=4. Usa Simpson 1/3 con h=1 para hallar el área aproximada.", opciones: ["26/3", "11/3", "26", "11"], correcta: 0 },
            { q: "Calcula aproximadamente ∫(de 0 a 2) x³ dx usando Simpson 1/3 con n=2.", opciones: ["4", "8/3", "4.5", "12"], correcta: 0 },
            { q: "Para calcular una aproximación de un área de un terreno curvo se tomaron 5 mediciones (es decir, 4 intervalos). ¿Qué método es el ideal para resolver esto?", opciones: ["Regla de Simpson 1/3 porque 'n' es par", "Regla de Simpson 3/8", "No se puede calcular", "Sumas de Riemann izquierdas"], correcta: 0 }
        ]
    }
];


let temaSeleccionado = 0;
let preguntaActual = 0;
let score = 0;
let quizActivo = false;


function verificarNombre() {
    let nombreGuardado = localStorage.getItem('nombreUsuario');
    if (!nombreGuardado) {
        document.getElementById('modal-nombre').style.display = 'flex';
        document.getElementById('input-nombre').focus();
    } else {
        document.getElementById('titulo-bienvenida').innerText = `¡Hola, ${nombreGuardado}!`;
    }
}

function guardarNombre() {
    let input = document.getElementById('input-nombre').value;
    if (input.trim() !== '') {
        localStorage.setItem('nombreUsuario', input.trim());
        document.getElementById('modal-nombre').style.display = 'none';
        document.getElementById('titulo-bienvenida').innerText = `¡Hola, ${input.trim()}!`;
    }
}

function manejarEnter(event) {
    if (event.key === "Enter") {
        guardarNombre();
    }
}

function mostrarBienvenida() {
    document.getElementById('bienvenida-section').style.display = 'block';
    document.getElementById('theory-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    
    document.getElementById('btn-inicio').classList.add('active');
    document.querySelectorAll('#menu-items .menu-item').forEach(el => el.classList.remove('active'));
    
    // Detener cualquier video sonando de fondo
    const videoContenedor = document.getElementById('video-contenedor');
    videoContenedor.innerHTML = '';
}

function cargarMenu() {
    const menu = document.getElementById('menu-items');
    menu.innerHTML = "";
    baseDatos.forEach((tema, index) => {
        const btn = document.createElement('div');
        btn.className = 'menu-item';
        btn.innerText = tema.titulo;
        btn.onclick = () => mostrarTema(index);
        menu.appendChild(btn);
    });
    mostrarBienvenida(); 
}

function mostrarTema(index) {
    temaSeleccionado = index;
    document.getElementById('bienvenida-section').style.display = 'none';
    volverATeoria();

    document.getElementById('btn-inicio').classList.remove('active');
    document.querySelectorAll('#menu-items .menu-item').forEach((el, i) => {
        el.className = i === index ? 'menu-item active' : 'menu-item';
    });

    const tema = baseDatos[index];
    document.getElementById('tema-titulo').innerText = tema.titulo;
    document.getElementById('tema-teoria').innerHTML = tema.teoria;

   
    const videoContenedor = document.getElementById('video-contenedor');
    if (tema.videoUrl) {
        videoContenedor.innerHTML = `
            <iframe src="${tema.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
        videoContenedor.style.display = 'block';
    } else {
        videoContenedor.style.display = 'none';
        videoContenedor.innerHTML = '';
    }

    let pasosHTML = tema.ejercicio.pasos.map((paso) => `
        <div class="paso">
            <span class="paso-header">${paso.h}</span>
            <p>${paso.p}</p>
        </div>
    `).join('');

    document.getElementById('ejercicio-contenedor').innerHTML = `
        <div class="ejercicio-box">
            <div class="ejercicio-titulo"><span>📝</span> Ejercicio Resuelto Paso a Paso</div>
            <p style="margin-bottom: 15px; color: var(--text-main); font-weight:500;"><strong>Problema:</strong> ${tema.ejercicio.enunciado}</p>
            <div class="formula-box">\\( ${tema.ejercicio.formula} \\)</div>
            ${pasosHTML}
        </div>
    `;

    if (window.MathJax) MathJax.typesetPromise();
    document.querySelector('.main-content').scrollTo(0,0);
}


function iniciarQuiz() {
    document.getElementById('theory-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    preguntaActual = 0;
    score = 0;
    mostrarPregunta();
    document.querySelector('.main-content').scrollTo(0,0);
    
    
    const videoContenedor = document.getElementById('video-contenedor');
    let iframe = videoContenedor.innerHTML;
    videoContenedor.innerHTML = iframe;
}

function volverATeoria() {
    document.getElementById('theory-section').style.display = 'block';
    document.getElementById('quiz-section').style.display = 'none';
}

function mostrarPregunta() {
    const preguntas = baseDatos[temaSeleccionado].preguntas;
    quizActivo = true;
    document.getElementById('btn-siguiente').style.display = 'none';

    if (preguntaActual >= preguntas.length) {
        mostrarResultados();
        return;
    }

    const data = preguntas[preguntaActual];
    
    document.getElementById('quiz-barra').style.width = ((preguntaActual) / preguntas.length) * 100 + "%";
    document.getElementById('quiz-contador').innerText = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    document.getElementById('pregunta-texto').innerText = data.q;
    
    const opcionesDiv = document.getElementById('opciones-contenedor');
    opcionesDiv.innerHTML = "";
    
    let opcionesMezcladas = data.opciones.map((txt, i) => ({txt, originalIndex: i})).sort(() => Math.random() - 0.5);
    
    opcionesMezcladas.forEach((opc) => {
        const btn = document.createElement('button');
        btn.className = "opcion";
        btn.innerText = opc.txt;
        btn.onclick = () => evaluarRespuesta(btn, opc.originalIndex, opcionesMezcladas, data.correcta);
        opcionesDiv.appendChild(btn);
    });
}

function evaluarRespuesta(boton, indiceOriginal, opcionesMezcladas, correctaIndex) {
    if (!quizActivo) return; 
    quizActivo = false;

    const botones = document.getElementById('opciones-contenedor').getElementsByClassName('opcion');
    for(let b of botones) { b.classList.add('disabled'); }
    
    let indiceCorrectoUI = opcionesMezcladas.findIndex(o => o.originalIndex === correctaIndex);

    if (indiceOriginal === correctaIndex) {
        boton.classList.add('correcta');
        score++;
    } else {
        boton.classList.add('incorrecta');
        botones[indiceCorrectoUI].classList.add('correcta'); 
    }
    document.getElementById('btn-siguiente').style.display = 'block';
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultados() {
    const total = baseDatos[temaSeleccionado].preguntas.length;
    const aprobado = score >= 3;
    
    document.getElementById('quiz-barra').style.width = "100%";
    document.getElementById('quiz-section').innerHTML = `
        <button class="btn-outline" onclick="mostrarTema(temaSeleccionado)">← Volver a los Apuntes</button>
        <div class="resultado-box card">
            <div style="font-size: 5rem; margin-bottom: 20px;">${aprobado ? '🏆' : '📚'}</div>
            <h2 style="color: var(--primary); font-size: 2.2rem; font-family: 'Poppins', sans-serif;">${aprobado ? '¡Excelente Trabajo!' : 'Es hora de repasar'}</h2>
            <div style="font-size: 4rem; font-weight: 900; color: var(--secondary); margin: 15px 0;">${score} / ${total}</div>
            <p style="color: var(--text-muted); font-size: 1.2rem; margin-bottom: 30px;">Has completado la práctica de este tema.</p>
            <button class="btn" style="width: auto; padding: 15px 40px;" onclick="mostrarTema(temaSeleccionado)">Volver a la Teoría</button>
        </div>
    `;
}


window.onload = function() {
    cargarMenu();
    verificarNombre();
};