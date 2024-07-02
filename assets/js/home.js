document.addEventListener("DOMContentLoaded", function () {
  fetch("/home.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("home-container").innerHTML = data;
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
      });
    });


