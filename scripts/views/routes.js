'use strict';

page('/', app.bookView.initIndexPage);

if(window.location.protocol.startsWith('https')) {
    page.base('/api/v1/books');
  }
  
  page('/*', (ctx, next) => {
    $('.page').hide()
    next()
  })
  
  page('/', app.bookView.initIndexPage)
  page('/listView', app.bookView.initIndexPage)
  page('/detailView', app.bookView.viewOneBook)
  page('/createView', app.createView.init)
  
page.start()