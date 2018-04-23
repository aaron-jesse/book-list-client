'use strict';
;

// if(window.location.protocol.startsWith('https')) {
//     page.base('/aaron-jesse.github.io/book-list-client/');
//   }
  
  page('/*', (ctx, next) => {
    $('.container').hide()
    next()
  })
  
  page('/', app.bookView.initIndexPage);
  
  page('/books/:id', (ctx) =>{
    app.Book.fetchOne(ctx.params.id).then((bookdata) => {
    app.bookView.viewOneBook(bookdata);
    });
});

  page('/books/new', () => app.bookView.createPage);
  
page.start()