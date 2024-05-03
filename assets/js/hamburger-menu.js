document.addEventListener('DOMContentLoaded', function() {
  // Encontra o botão de alternância e a barra de navegação
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('#navbarNav');

  // Adiciona um evento de clique ao botão de alternância
  navbarToggler.addEventListener('click', function() {
      // Verifica se a barra de navegação já está visível
      const isExpanded = navbarNav.classList.contains('show');

      // Alterna a classe 'show' na barra de navegação
      if (isExpanded) {
          navbarNav.classList.remove('show');
      } else {
          navbarNav.classList.add('show');
      }

      // Atualiza o atributo 'aria-expanded' do botão de alternância
      navbarToggler.setAttribute('aria-expanded', !isExpanded);
  });
});
