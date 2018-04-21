'use strict';

// page('/', app.bookView.initIndexPage);

if(window.location.protocol.startsWith('https')) {
    page.base('/aaron-jesse.github.io/book-list-client/');
  }
  
  page('/*', (ctx, next) => {
    $('.page').hide()
    next()
  })
  
  page('/', app.Book.fetchAll(app.bookView.initIndexPage))
  
  page('/detailView', app.Book.fetchOne(app.bookView.viewOneBook))
  page('/createView', app.bookView.createPage)
  
page.start()