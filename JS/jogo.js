class Pergunta {
    constructor(id, texto, certa, erradas, premio) {
        this.id = id;
        this.texto = texto;
        this.respostaCerta = certa;
        this.respostasErradas = erradas;
        this.premio = premio;
    }
}
const perguntas = [
    new Pergunta(
        1,
        "Qual personagem é o mascote da Nintendo?",
        "Mario",
        ["Sonic", "Link", "Kirby"],
        "R$1.000,00"
    ),
    new Pergunta(
        2,
        "Qual é o maior planeta do Sistema Solar?",
        "Júpiter",
        ["Saturno", "Netuno", "Terra"],
        "R$2.000,00"
    ),
    new Pergunta(
        3,
        "Em que jogo aparece o personagem Sonic?",
        "Sonic the Hedgehog",
        ["Super Mario Bros", "Mega Man", "Street Fighter"],
        "R$3.000,00"
    ),
    new Pergunta(
        4,
        "Qual é o oceano mais extenso do mundo?",
        "Oceano Pacífico",
        ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
        "R$4.000,00"
    ),
    new Pergunta(
        5,
        "Qual empresa criou o jogo 'The Legend of Zelda'?",
        "Nintendo",
        ["Sony", "Microsoft", "Sega"],
        "R$5.000,00"
    ),
    new Pergunta(
        6,
        "Qual é o elemento químico representado pelo símbolo 'O'?",
        "Oxigênio",
        ["Ouro", "Ósmio", "Hidrogênio"],
        "R$10.000,00"
    ),
    new Pergunta(
        7,
        "Em que jogo aparece o personagem Kratos?",
        "God of War",
        ["Assassin's Creed", "Dark Souls", "The Witcher"],
        "R$20.000,00"
    ),
    new Pergunta(
        8,
        "Quem pintou a Mona Lisa?",
        "Leonardo da Vinci",
        ["Michelangelo", "Rafael", "Donatello"],
        "R$30.000,00"
    ),
    new Pergunta(
        9,
        "Qual foi o primeiro console lançado pela Sony?",
        "PlayStation",
        ["PlayStation 2", "PSP", "PlayStation 3"],
        "R$40.000,00"
    ),
    new Pergunta(
        10,
        "Qual país é conhecido como Terra do Sol Nascente?",
        "Japão",
        ["China", "Coreia do Sul", "Tailândia"],
        "R$50.000,00"
    ),
    new Pergunta(
        11,
        "Em que jogo eletrônico aparece o mapa 'Dust II'?",
        "Counter-Strike",
        ["Call of Duty", "Battlefield", "Valorant"],
        "R$100.000,00"
    ),
    new Pergunta(
        12,
        "Qual é o maior osso do corpo humano?",
        "Fêmur",
        ["Tíbia", "Úmero", "Clavícula"],
        "R$200.000,00"
    ),
    new Pergunta(
        13,
        "Qual empresa desenvolveu o jogo 'Minecraft'?",
        "Mojang",
        ["Epic Games", "Valve", "Ubisoft"],
        "R$300.000,00"
    ),
    new Pergunta(
        14,
        "Qual é o país com maior população do mundo atualmente?",
        "Índia",
        ["China", "Estados Unidos", "Indonésia"],
        "R$400.000,00"
    ),
    new Pergunta(
        15,
        "Qual personagem é o protagonista da série 'The Witcher' nos jogos?",
        "Geralt de Rívia",
        ["Ciri", "Yennefer", "Dandelion"],
        "R$500.000,00"
    ),
    new Pergunta(
        16,
        "Qual cientista desenvolveu a teoria da relatividade?",
        "Albert Einstein",
        ["Isaac Newton", "Galileu Galilei", "Nikola Tesla"],
        "R$1.000.000,00"
    )
];
let indiceAtual = 0;
let acertos = 0;

function embaralhar(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function mostrarPergunta() {

    const perguntaAtual = perguntas[indiceAtual];
    if (!perguntaAtual) return;

    document.getElementById("premio").textContent =
        "Prêmio atual: " + perguntaAtual.premio;

    document.getElementById("texto-pergunta").textContent =
        perguntaAtual.texto;

    const divRespostas = document.getElementById("respostas");
    divRespostas.innerHTML = "";

    const todasRespostas = [
        perguntaAtual.respostaCerta,
        ...perguntaAtual.respostasErradas
    ];

    const respostasEmbaralhadas = embaralhar(todasRespostas);
    const letras = ["A", "B", "C", "D"];

    respostasEmbaralhadas.forEach((resposta, index) => {

        const botao = document.createElement("button");
        botao.textContent = `${letras[index]}) ${resposta}`;

        botao.addEventListener("click", () => {
            verificarResposta(resposta);
        });

        divRespostas.appendChild(botao);
    });
}

function verificarResposta(respostaSelecionada) {

    const perguntaAtual = perguntas[indiceAtual];

    if (respostaSelecionada === perguntaAtual.respostaCerta) {

        acertos++;
        indiceAtual++;

        if (indiceAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            finalizarJogo(true);
        }

    } else {
        finalizarJogo(false);
    }
}

function finalizarJogo(ganhou) {

    localStorage.setItem("acertos", acertos);

    if (ganhou) {
        window.location.href = "vitoria.html";
    } else {
        window.location.href = "derrota.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarPergunta();
});