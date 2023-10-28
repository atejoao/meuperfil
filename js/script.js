// tres constantes para referenciar as ITEM nas DIVS Projetos 

const formulario = document.getElementById("formulario");
const siteResponsivo = document.getElementById("siteResponsivo");
const portfolio = document.getElementById("portfolio");

// tres constantes para referenciar as ID dos iFrames
const videoFormulario = document.querySelector ("#videoFormulario");
const videoSite = document.querySelector ("#videoSite");
const videoPortfolio = document.querySelector ("#videoPortfolio");

// evento do click
formulario.addEventListener("click", () => {
    formulario.classList.toggle("active");
    videoFormulario.classList.toggle("active");
});
siteResponsivo.addEventListener("click", () => {
    siteResponsivo.classList.toggle("active");
    videoSite.classList.toggle("active");
});
portfolio.addEventListener("click", () => {
    portfolio.classList.toggle("active");
    videoPortfolio.classList.toggle("active");
});