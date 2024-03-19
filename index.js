const opcoes = {
    acessibilidade: true,
    antProxBotoes: true,
    pontosDaPagina: true,
    tamanhoGaleria: false,
    setas: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    }
};

function posicaoBg(slide, index) {
    const x = -(slide.target + flkty.x) / 3;
    slides[index].style.backgroundPosicao = `${x}px`;
}

const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, opcoes);

flkty.on('scroll', () => {
    flkty.slides.forEach(posicaoBg);
});