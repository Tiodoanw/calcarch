const quizData = {
    continuidad: {
        title: "Prueba 1: Continuidad (Arquitectura)",
        questions: [
            {
                q: "En el diseño de una viga, la ecuación de la elástica de deformación f(x) presenta un salto en x=L/2. Esto arquitectónicamente representa:",
                options: ["Una viga en voladizo", "Una viga continua", "Una falla estructural grave o rótula en ese nodo", "Un apoyo simple"],
                ans: 2
            },
            {
                q: "Un techo tiene el perfil curvo f(x). Para que el recubrimiento impermeabilizante no se fracture por discontinuidades, f(x) DEBE:",
                options: ["Ser constante", "Ser continua en todo el tramo", "Tener pendiente cero en el borde", "Ser discontinua en los apoyos"],
                ans: 1
            },
            {
                q: "El costo C(A) del concreto según el área A tiene la forma C(A) = 15A si A < 100 y C(A) = 12A si A >= 100. ¿Hay continuidad de costo en A = 100?",
                options: ["Sí, el costo no salta", "No, hay un saldo brusco (discontinuidad de salto) de $1500 a $1200", "Depende de las varillas", "Es una discontinuidad al infinito"],
                ans: 1
            },
            {
                q: "Una rampa de transición conecta dos losas modeladas por f1(x) y f2(x) en el quiebre x=a. Para evitar un escalón (tropiezo), debes asegurar obligatoriamente que:",
                options: ["El límite de f1(x) converja a f2(a)", "Ambas rampas sean asintóticas", "Tengan igual material liso", "f1(x) siempre sea mayor a f2(x)"],
                ans: 0
            },
            {
                q: "El perfil de compresión de un puente arco se modela con f(x). En la dovela clave (x=0), la fórmula teórica da división por cero. Físicamente no hay material infinito. ¿Qué discontinuidad hay en esa fórmula?",
                options: ["Removible (se rediseña el puente sin el arco central)", "Infinita o asintótica en su modelo teórico básico", "De salto transversal", "No existe discontinuidad, es una ilusión óptica"],
                ans: 1
            }
        ]
    },
    derivadas: {
        title: "Prueba 2: Derivadas Parciales (Arquitectura)",
        questions: [
            {
                q: "El terreno de tu proyecto tiene la cota topográfica z = f(x,y). ¿Qué representa físicamente f_x?",
                options: ["El área en metros cuadrados del lote", "La pendiente del terreno al caminar solo en dirección paralela a la fachada Este-Oeste (x)", "El nivel máximo de excavación", "El volumen de relleno"],
                ans: 1
            },
            {
                q: "En una cúpula paraboloide donde z = 10 - x^2 - y^2, si te paras donde y=1 y caminas hacia adelante variando 'y' (manteniendo x fijo), ¿calculando mentalmente, de qué depende f_y?",
                options: ["De x directamente", "Exclusivamente de -2y", "Es una pendiente constante 2", "La altura z es cero ahí"],
                ans: 1
            },
            {
                q: "El flujo de pérdida de calor en un tabique depende del ancho de fibra aislante (x) y la incidencia externa (y): Q(x,y) = x^2 \\cdot \\ln(y). ¿La sensibilidad al calor exterior (Q_y) es?",
                options: ["2x \\cdot \\ln(y)", "x^2 / y", "x^2 \\cdot y", "Independiente de y"],
                ans: 1
            },
            {
                q: "Un toldo hiperbólico tensado tiene ecuación z = x^3 \\cdot y. La tasa diferencial cruzada f_{xy} indica:",
                options: ["La deformación elástica del textil", "La combadura, o cómo la pendiente longitudinal (en x) varía mientras te mueves transversalmente (en y)", "El tonelaje de cables", "El número perimetral de anclajes"],
                ans: 1
            },
            {
                q: "Requieres f_x para estimar la variación veloz de pintura en un frontis con paños complejos F(x,y) = 5xy + 10y^2. x=ancho, y=pasos.",
                options: ["5y", "5x + 20y", "10y", "5x"],
                ans: 0
            }
        ]
    },
    integracion: {
        title: "Prueba 3: Cambio de Variable (Arquitectura)",
        questions: [
            {
                q: "Presupuestas el vaciado de una zapata irregular de sección f(x) = x \\cdot \\cos(x^2). Para la integral, usas la sustitución u=x^2. ¿Cuánto vale du?",
                options: ["dx", "2x dx", "cos(x) dx", "x^2 dx"],
                ans: 1
            },
            {
                q: "La fuerza portante estática acumulada sobre la base del fuste en un rascacielos se modela mediante integral de e^(3x). Si haces u = 3x, la técnica da por resultado la función madre:",
                options: ["3e^{3x} + C", "(1/3) e^{3x} + C", "e^{3x}", "\\ln|3x|"],
                ans: 1
            },
            {
                q: "Para obtener el momento resistente de una baranda vidriada, el cálculo pide integrar x / (x^2 + 4). El cambio de variable algebraico ideal aquí es:",
                options: ["u = x", "u = 4", "u = (x^2 + 4)", "u = x^2"],
                ans: 2
            },
            {
                q: "Hallando el centroide volumétrico de una bóveda de rincón de claustro, llegas a la integral de sin(x) \\cdot cos(x). Usando u=sin(x), el área arroja un antiderivada tipo:",
                options: ["sin(x) + C", "(1/2) sin^2(x) + C", "-cos(x) + C", "x^2/2 + C"],
                ans: 1
            },
            {
                q: "Calcula la longitud del arco (perfil aerodinámico) donde el radical termina siendo \\int (2x) / \\sqrt{x^2 + 1} dx. Usando sustitución rápida u = x^2 + 1, da:",
                options: ["2 \\cdot \\sqrt{x^2 + 1}", "1 / (x^2 + 1)^2", "\\ln|x^2 + 1|", "(x^2+1)^2"],
                ans: 0
            }
        ]
    },
    area: {
        title: "Prueba 4: Área entre Curvas (Arquitectura)",
        questions: [
            {
                q: "Proyectas el replanteo de una plazoleta acotada por las aceras y = x y y = x^3. Analizando cuadrante positivo, ¿en qué coordenada exacta chocan para fijar el cerco?",
                options: ["x = 0 solamente", "x = 1 (punto donde se cruzan)", "x = 2", "No tienen encuentro"],
                ans: 1
            },
            {
                q: "Una vez delimitada la plazoleta del punto previo entre 0 y 1, si notas que la acera y = x va por FUERA y y=x^3 por dentro, la porción interior a pavimentar se halla calculando:",
                options: ["\\int (x^3 - x) dx", "\\int (x - x^3) dx", "\\int (x + x^3) dx", "\\int x^3 dx por separado"],
                ans: 1
            },
            {
                q: "El área longitudinal de una galería comercial rodeada por una calle perimetral y = x+2 y una cuenca hidrográfica y = x^2. La galería empieza en cota x=-1 y el río se desvía terminando cruce en x=2. La ecuación topográfica total plantada es:",
                options: ["\\int_{-1}^2 (x+2 - x^2) dx", "\\int (x^2 - x - 2) dx", "\\int_{-1}^2 (x+2) dx", "No se puede calcular cerradamente"],
                ans: 0
            },
            {
                q: "Tienes que diseñar un voladizo en doble curvatura cubriendo el área entre z = \\sqrt{x} y z = x^2 en el piso uno. Si no lo divides e integras ciegamente más allá de su cruce en x=1...",
                options: ["El resultado es siempre correcto", "Las áreas positivas y negativas geométricas se anularán resultando en presupuestos irreales", "La integral devuelve error NaN", "El acero a encargar dará el doble absoluto"],
                ans: 1
            },
            {
                q: "A nivel rápido, halla el valor para ese voladizo en tela de tracción (entre y=x e y=x^2) en el sector de 0 a 1 metro.",
                options: ["1/2 m^2", "1/3 m^2", "1/6 m^2", "1.5 m^2"],
                ans: 2
            }
        ]
    },
    simpson: {
        title: "Prueba 5: Simpson en Terrenos (Arquitectura)",
        questions: [
            {
                q: "Como arquitecto trazando curvas de nivel (sin ecuaciones conocidas) para calcular cubicaje y remoción de suelo, quieres aplicar la Regla de Simpson (1/3). Obligatoriamente el formato numérico 'n' de perfiles debe ser:",
                options: ["Impar", "Libre de criterio topográfico", "Un número exactamente Par", "Equivalente al número crudo de cuadrantes"],
                ans: 2
            },
            {
                q: "¿Por qué un delineante o calculista en Arquitectura prefiere usar aproximación por curvas de Simpson sobre sumatorias de rectángulos (Riemann) al perfilar cubiertas paramétricas?",
                options: ["Porque no asume polígonos rectos toscos, intercala arcos logrando suavidad parabólica en cada borde", "Porque rectángulos gastan mucha CPU", "Para requerir menos cotas de la estación topográfica", "Es una práctica de desuso"],
                ans: 0
            },
            {
                q: "En una fachada irregular donde tu h (distancia entre pilares) es constante, ¿cuál es el patrón de pesos matemáticos que asignas a las alturas leídas h0, h1, h2, h3, h4 para armar el corchete de Simpson?",
                options: ["1, 2, 2, 2, 1", "1, 3, 3, 1", "1, 4, 2, 4, 1", "Sumatoria lineal 1x"],
                ans: 2
            },
            {
                q: "¿A qué elemento físico de obra corresponde la variable \"h\" o \"\\(\\Delta x\\)\" de los sumandos aproximados de Simpson?",
                options: ["A la luz estandarizada (paso/ancho) de separación constante geométrica entre lectura y lectura estructural a lo largo de la fachada longitudinal", "La cumbrera más alta referencial del techo", "La flecha/pandeo máximo entre arcos", "Suma entera lineal"],
                ans: 0
            },
            {
                q: "Evaluando la laguna exterior del complejo, tienes 3 cotas topográficas exactas (ancho=1, ancho=4, ancho=9 a pasajes h=3m de distancia). Usando \\( \\frac{h}{3} [f0 + 4f1 + f2] \\), el espejo de agua estimado es:",
                options: ["14 m^2", "(3/3) \\times [1 + 16 + 9] = 26 m^2", "1 \\times [1 + 16 + 9] = 26 m^3", "(1/3) \\times [1+ 4(4) + 9]"],
                ans: 1
            }
        ]
    }
};

let currentTopicId = null;

function showPage(pageId) {
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(p => p.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === '#' + pageId) {
            l.classList.add('active');
        }
    });

    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        toggleSidebar();
    }
}

window.onload = () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash) && document.getElementById(hash).classList.contains('page-view')) {
        showPage(hash);
    }
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
};

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function openQuiz(topicId) {
    currentTopicId = topicId;
    const data = quizData[topicId];

    document.getElementById('modal-title').innerText = data.title;

    const contentDiv = document.getElementById('quiz-content');
    contentDiv.innerHTML = '';

    data.questions.forEach((q, qIndex) => {
        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            optionsHtml += `
                <label class="option-box">
                    <input type="radio" name="q_${qIndex}" value="${optIndex}">
                    <span>${opt}</span>
                </label>
            `;
        });

        contentDiv.innerHTML += `
            <div class="quiz-q-block">
                <p class="question-text">${qIndex + 1}. ${q.q}</p>
                <div class="options-wrapper">
                    ${optionsHtml}
                </div>
            </div>
        `;
    });

    if (window.MathJax) {
        MathJax.typesetPromise([contentDiv]).catch((err) => console.log(err.message));
    }

    document.getElementById('btn-submit-quiz').onclick = gradeQuiz;

    document.getElementById('quiz-modal').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('quiz-modal').classList.add('show');
    }, 10);
}

function gradeQuiz() {
    const data = quizData[currentTopicId];
    const total = data.questions.length;
    let score = 0;

    data.questions.forEach((q, qIndex) => {
        const selected = document.querySelector(`input[name="q_${qIndex}"]:checked`);
        if (selected && parseInt(selected.value) === q.ans) {
            score++;
        }
    });

    const scoreText = document.getElementById('score-text');
    const feedback = document.getElementById('result-feedback');
    const displayBg = document.querySelector('.score-display');
    const heading = document.getElementById('result-heading');

    scoreText.innerText = `${score}/${total}`;

    if (score === total) {
        heading.innerText = "¡Criterio Profesional Aprobado!";
        feedback.innerText = "Has demostrado dominar este tema y estás listo para aplicarlo al cálculo para tus proyectos Arquitectónicos. ¡Excelente!";
        displayBg.classList.remove('fail');
    } else {
        heading.innerText = "Mesa de Revisión";
        feedback.innerText = "Te sugerimos revisar de nuevo el comportamiento del modelo estructural para perfeccionar tus destrezas analíticas.";
        displayBg.classList.add('fail');
    }

    document.getElementById('quiz-modal').classList.remove('show');
    setTimeout(() => {
        document.getElementById('quiz-modal').style.display = 'none';

        document.getElementById('result-modal').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('result-modal').classList.add('show');
        }, 10);
    }, 300);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function closeAllModals() {
    closeModal('quiz-modal');
    closeModal('result-modal');
}
