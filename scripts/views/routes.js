'use strict';
;

if(window.location.protocol.startsWith('https')) {
    page.base('/aaron-jesse.github.io/book-list-client/');
  }
  
  page('/*', (ctx, next) => {
    $('.container').hide()
    next()
  })
  
  page('/', app.bookView.initIndexPage);
  
  page('/books/:id', (ctx) =>{
    app.Book.fetchOne(ctx.params.id).then((bookdata) => {
      console.log(bookdata);
    app.bookView.viewOneBook(bookdata);
    console.log('here');
    });
});

  page('/books/new', () => app.bookView.createBook());
  
page.start()