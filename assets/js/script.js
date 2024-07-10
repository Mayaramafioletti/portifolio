const tabs = document.querySelectorAll('.menu-item'); //pegar todos os componentes que tem a classe .menu-item

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab))); //precorrer todos os botões para adicionar o evento de click

const tabClicked = (tab) => { //função de click com a tab que ela vai receber
    tabs.forEach(tab => tab.classList.remove('active')); //olhar todas as tabs e remover o active
    tab.classList.add('active'); //adicionar o active na que foi selecionada

    const contents = document.querySelectorAll('.content'); //pegar os componetes que titverem a class .content
    contents.forEach(content => content.classList.remove('show')); //percorrer todos os elementos que tem a classe content e remover o que tiver o show

    const contentId = tab.getAttribute('content-id'); //pegar o atributo do content-id do botão
    const content = document.getElementById(contentId); //aqui pega o elemento todo que tem o content-id de cima

    content.classList.add('show'); //Adicionar a classe show para fazer a tab selecionada aparecer
}

const currentActiveTab = document.querySelector('.menu-item.active'); //ver qual tab tá selecionada através da classe .active
tabClicked(currentActiveTab); //aqui faz com que no primeiro carregamento a tela que estava selecionada apareça

const tecnologiasContainer = document.getElementById("tecnologias");
const imagens = [
  { src: "/assets/images/angular.png", alt: "Angular" },
  { src: "/assets/images/figma.png", alt: "Figma" },
  { src: "/assets/images/html.png", alt: "HTML5" },
  { src: "/assets/images/javascript.png", alt: "JavaScript" },
  { src: "/assets/images/jasmine.png", alt: "Jasmine" },
  { src: "/assets/images/scss.png", alt: "SCSS" },
  { src: "/assets/images/node.png", alt: "node" },
  { src: "/assets/images/git.png", alt: "Git" },
  { src: "/assets/images/mockoon.png", alt: "mockoon" },
  { src: "/assets/images/jira.png", alt: "Jira" },
  { src: "/assets/images/confluence.png", alt: "Confluence" },
];

const wrapperInner = document.createElement("div");
wrapperInner.classList.add("wrapper-inner");

// Adicionar as imagens duas vezes para criar a repetição
for (let i = 0; i < 2; i++) {
  imagens.forEach((imagem) => {
    const imgElement = document.createElement("img");
    imgElement.src = imagem.src;
    imgElement.alt = imagem.alt;
    imgElement.classList.add("wrapper-img");
    wrapperInner.appendChild(imgElement);
  });
}

tecnologiasContainer.appendChild(wrapperInner);
