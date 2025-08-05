// Abrir Modal
function abrirModal(projetoId) {
  const modal = document.getElementById('modalProjeto');
  const modalImagem = document.getElementById('modalImagem');
  const modalTitulo = document.getElementById('modalTitulo');
  const modalDescricao = document.getElementById('modalDescricao');

  // Substitua isso por dados reais se desejar
  const dadosProjetos = {
    projeto1: {
      titulo: 'Residência no Campo',
      imagem: 'img/projeto1.jpg',
      descricao: 'Projeto de casa térrea com integração à natureza e uso de materiais sustentáveis.'
    },
    projeto2: {
      titulo: 'Studio Urbano',
      imagem: 'img/projeto2.jpg',
      descricao: 'Espaço compacto e funcional para moradia e trabalho em grandes cidades.'
    },
    projeto3: {
      titulo: 'Escritório Criativo',
      imagem: 'img/projeto3.jpg',
      descricao: 'Ambiente corporativo moderno que estimula a criatividade com design biofílico.'
    },
    projeto4: {
      titulo: 'Loja Sustentável',
      imagem: 'img/projeto4.jpg',
      descricao: 'Comércio com soluções ecológicas e identidade visual marcante.'
    }
  };

  const projeto = dadosProjetos[projetoId];

  if (projeto) {
    modalImagem.src = projeto.imagem;
    modalTitulo.textContent = projeto.titulo;
    modalDescricao.textContent = projeto.descricao;
    modal.style.display = 'flex';
  }
}

// Fechar Modal
function fecharModal() {
  document.getElementById('modalProjeto').style.display = 'none';
}

// Carrossel - deslizar
function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel-projetos');
  const scrollAmount = 300;
  carousel.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
