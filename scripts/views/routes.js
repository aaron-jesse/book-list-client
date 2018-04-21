'use strict';
;

// if(window.location.protocol.startsWith('https')) {
//     page.base('/aaron-jesse.github.io/book-list-client/');
//   }
  
  page('/*', (ctx, next) => {
    $('.container').hide()
    next()
  })
  
  page('/', () => app.bookView.initIndexPage());
  
  // page('/detailView', () => app.Book.fetchOne(app.bookView.viewOneBook));
  page('/create', () => app.bookView.createPage());
  
page.start()