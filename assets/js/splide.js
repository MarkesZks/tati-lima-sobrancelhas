var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 2,
  perMove: 1,
  gap: '1.5rem',
  padding: '3rem',
  drag: 'free',
  snap: true,
  arrows: true,
  pagination: true,
  autoplay: true,
  breakpoints: {
    767: {
      perPage: 1,
      gap: '4rem'
    }
  }
} );

splide.mount();
