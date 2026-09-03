/* ===== Missão 2030 - interações da landing page ===== */

// ---------- dados das 10 temáticas (cada uma ocupa 2 encontros) ----------
const ENCONTROS = [
  {
    n: 1, nome: "A Jornada", tema: "Projeto de vida",
    pergunta: "Onde estou e para onde quero ir?",
    peca: "Mapa inicial da jornada",
    desc: "O participante entende sua vida como uma jornada em construção. Começa a refletir sobre onde está hoje, quais experiências o formaram, quais talentos possui, quais desafios enfrenta e que tipo de futuro deseja construir. É o início do Plano de Vida.",
    img: "assets/img/encontros/01-jornada.jpg"
  },
  {
    n: 2, nome: "O Espelho", tema: "Identidade",
    pergunta: "Quem sou eu além das expectativas dos outros?",
    peca: "Retrato pessoal, talentos e identidade",
    desc: "O foco é identidade. O participante olha para si mesmo além das expectativas dos pais, da escola, dos amigos, das redes sociais ou da sociedade. Começa a reconhecer seus talentos, interesses, características, valores e pontos de desenvolvimento.",
    img: "assets/img/encontros/02-espelho.jpg"
  },
  {
    n: 3, nome: "A Coragem", tema: "Medo e ação",
    pergunta: "O que eu preciso enfrentar?",
    peca: "Medos e microcoragens",
    desc: "Este encontro trabalha o medo e a ação. Coragem não é ausência de medo, mas a decisão de agir apesar dele. Cada participante identifica algo que precisa enfrentar e escolhe uma pequena atitude corajosa para praticar.",
    img: "assets/img/encontros/03-coragem.jpg"
  },
  {
    n: 4, nome: "A Vida Boa", tema: "Sentido de vida",
    pergunta: "Que tipo de vida vale a pena construir?",
    peca: "Definição pessoal de sucesso e felicidade",
    desc: "O encontro trabalha sentido de vida. O participante reflete sobre a diferença entre sucesso, prazer, popularidade, comparação, aprovação externa e felicidade verdadeira. A vida boa não é sobre agradar os outros, mas sobre viver de acordo com o que realmente importa para você.",
    img: "assets/img/encontros/04-vida-boa.jpg"
  },
  {
    n: 5, nome: "A Queda", tema: "Resiliência",
    pergunta: "Como lidar com erro, queda e recomeço?",
    peca: "Plano para lidar com fracassos e recomeços",
    desc: "O foco é resiliência. Errar, cair, se frustrar e recomeçar fazem parte de qualquer trajetória relevante. O erro deixa de ser visto como fracasso definitivo e passa a ser entendido como parte do aprendizado e do recomeço.",
    img: "assets/img/encontros/05-queda.jpg"
  },
  {
    n: 6, nome: "A Sombra", tema: "Autossabotagem",
    pergunta: "Como reconhecer meu sabotador interno?",
    peca: "Mapa do sabotador interno",
    desc: "Este encontro trabalha autossabotagem, procrastinação, perfeccionismo, comparação, medo de errar e fuga da responsabilidade. A ideia é ajudar o participante a reconhecer seus padrões internos para não ser dominado por eles.",
    img: "assets/img/encontros/06-sombra.jpg"
  },
  {
    n: 7, nome: "A Influência", tema: "Pertencimento e ambiente",
    pergunta: "Como grupos, cultura e ambiente me moldam?",
    peca: "Mapa de influências positivas e negativas",
    desc: "O foco é pertencimento e ambiente. O participante reflete sobre como grupos, amizades, redes sociais, cultura e ambientes moldam escolhas. Somos a média das pessoas com quem convivemos: que tipo de pessoa eu me torno nesse grupo?",
    img: "assets/img/encontros/07-influencia.jpg"
  },
  {
    n: 8, nome: "A Escolha", tema: "Valores e decisão",
    pergunta: "Como tomar boas decisões quando há pressão, dúvida ou tentação?",
    peca: "Código de valores e critérios de decisão",
    desc: "Este encontro trabalha valores, caráter e decisão responsável. O participante aprende a tomar decisões melhores quando existe pressão, dúvida, tentação, desejo de aceitação ou ambição, e começa a construir seu código pessoal de valores.",
    img: "assets/img/encontros/08-escolha.jpg"
  },
  {
    n: 9, nome: "A Criação", tema: "Empreendedorismo",
    pergunta: "Como transformar ideias em projetos que geram valor?",
    peca: "Ideia de projeto, solução ou iniciativa",
    desc: "O foco é empreendedorismo e criação de valor. O participante aprende a transformar ideias em projetos, iniciativas ou soluções. Aqui entram STEAM, pensamento crítico, criatividade aplicada, resolução de problemas, colaboração e prototipagem: a ponte para o desafio da NASA.",
    img: "assets/img/encontros/09-criacao.jpg"
  },
  {
    n: 10, nome: "O Legado", tema: "Impacto",
    pergunta: "Que contribuição quero deixar no mundo?",
    peca: "Manifesto final da jornada",
    desc: "O fechamento conecta a jornada pessoal ao impacto no mundo: cidadania planetária, sustentabilidade, aquecimento global, limites planetários, tecnologia e futuro do trabalho. Cada participante apresenta seu Manifesto da Jornada: a síntese do seu Projeto de Vida.",
    img: "assets/img/encontros/10-legado.jpg"
  }
];

// ---------- grade de encontros ----------
const grade = document.getElementById("grade-encontros");
if (grade) {
  ENCONTROS.forEach((e, i) => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-4 col-xl-3 reveal";
    col.innerHTML = `
      <div class="card-m30 encontro-card" data-idx="${i}" role="button" aria-label="Ver detalhes da temática ${e.n}: ${e.nome}">
        <span class="encontro-num">${e.n}</span>
        <div class="enc-img"><img src="${e.img}" alt="Temática ${e.n}: ${e.nome}" class="w-100" loading="lazy"></div>
        <div class="card-body">
          <div class="tema">${e.tema}</div>
          <h5 class="mb-1 mt-1">${e.nome}</h5>
          <div class="pergunta">${e.pergunta}</div>
          <div class="ver-mais mt-2">Ver detalhes <i class="bi bi-arrow-right"></i></div>
        </div>
      </div>`;
    grade.appendChild(col);
  });
}

// ---------- modal dos encontros ----------
let atual = 0;
const modalEl = document.getElementById("modalEncontro");
const modal = modalEl ? new bootstrap.Modal(modalEl) : null;

function abrirEncontro(i) {
  atual = (i + ENCONTROS.length) % ENCONTROS.length;
  const e = ENCONTROS[atual];
  document.getElementById("me-titulo").textContent = `Temática ${e.n}: ${e.nome}`;
  document.getElementById("me-img").src = e.img;
  document.getElementById("me-img").alt = `Temática ${e.n}: ${e.nome}`;
  document.getElementById("me-tema").textContent = `Tema central: ${e.tema}`;
  document.getElementById("me-pergunta").textContent = `"${e.pergunta}"`;
  document.getElementById("me-desc").textContent = e.desc;
  document.getElementById("me-peca").textContent = `Peça do Projeto de Vida: ${e.peca}`;
}

document.addEventListener("click", (ev) => {
  const card = ev.target.closest(".encontro-card");
  if (card && modal) {
    abrirEncontro(parseInt(card.dataset.idx, 10));
    modal.show();
  }
});
document.getElementById("me-prev")?.addEventListener("click", () => abrirEncontro(atual - 1));
document.getElementById("me-next")?.addEventListener("click", () => abrirEncontro(atual + 1));

// ---------- contador regressivo (aula de abertura 26/08/2026, 19h de Brasilia) ----------
(function countdown() {
  // Data fixa com o fuso escrito na string (-03:00). Sem isso o alvo seria
  // montado no fuso de quem acessa, e quem estivesse fora do Brasil veria
  // uma contagem deslocada.
  const alvo = new Date("2026-08-26T19:00:00-03:00");

  const el = {
    d: document.getElementById("cd-d"),
    h: document.getElementById("cd-h"),
    m: document.getElementById("cd-m"),
    s: document.getElementById("cd-s")
  };
  if (!el.d) return;

  function tick() {
    let diff = Math.max(0, alvo.getTime() - Date.now()) / 1000;
    const d = Math.floor(diff / 86400); diff -= d * 86400;
    const h = Math.floor(diff / 3600);  diff -= h * 3600;
    const m = Math.floor(diff / 60);
    const s = Math.floor(diff - m * 60);
    el.d.textContent = String(d);
    el.h.textContent = String(h).padStart(2, "0");
    el.m.textContent = String(m).padStart(2, "0");
    el.s.textContent = String(s).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
})();

// ---------- reveal on scroll ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("visible");
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Rede de seguranca do reveal. Enquanto .reveal esta em opacidade parcial, a
// imagem e composta sobre o azul-escuro do fundo: os pretos sobem, os brancos
// caem, e a foto parece lavada, com um veu azulado. Se por qualquer motivo o
// observer nao disparar (aba em segundo plano, prefers-reduced-motion, erro de
// JS antes daqui), o elemento fica preso nesse estado. Duas garantias:
//   1. o que ja nasce visivel na tela aparece direto, sem fade;
//   2. passados 2,5s, qualquer .reveal restante e revelado de qualquer forma.
// Nos dois casos a revelacao e INSTANTANEA (transition: none). So adicionar a
// classe nao resolve: a transicao de opacidade nao avanca em aba de segundo
// plano, entao o elemento ficaria parado na opacidade 0 mesmo ja marcado como
// visivel. Zerar a transicao faz a opacidade saltar para 1 na hora.
(function redeDeSegurancaReveal() {
  const revelar = (el) => {
    el.style.transition = "none";
    el.classList.add("visible");
    revealObserver.unobserve(el);
  };

  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) revelar(el);
  });

  setTimeout(() => document.querySelectorAll(".reveal:not(.visible)").forEach(revelar), 2500);
})();

// ---------- contadores animados ----------
function animarNumero(el, alvo) {
  const dur = 1600;
  const inicio = performance.now();
  function frame(t) {
    const p = Math.min(1, (t - inicio) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(alvo * eased);
    // data-prefix / data-suffix deixam o "+" no HTML, junto do numero que ele qualifica
    const pre = el.dataset.prefix || "";
    const suf = el.dataset.suffix || "";
    const fmt = (n) => pre + (n >= 10000 ? n.toLocaleString("pt-BR") : String(n));
    el.textContent = fmt(val);
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = fmt(alvo) + suf;
  }
  requestAnimationFrame(frame);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      animarNumero(en.target, parseInt(en.target.dataset.count, 10));
      statObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".stat-num[data-count]").forEach((el) => statObserver.observe(el));

// ---------- pausa outros vídeos ao dar play ----------
document.querySelectorAll("video").forEach((v) => {
  v.addEventListener("play", () => {
    document.querySelectorAll("video").forEach((o) => { if (o !== v) o.pause(); });
  });
});

// ---------- capa do YouTube: so carrega o player depois do clique ----------
document.querySelectorAll(".yt-facade").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.yt;
    const iframe = document.createElement("iframe");
    // nocookie + autoplay: o play ja foi pedido pelo usuario no clique da capa
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = "Video de apresentacao do Missao 2030";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
  }, { once: true });
});
