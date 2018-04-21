'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }


  bookView.viewOneBook = function(){
    $('.container').hide();
    $('.single-book-view').show();
    
  }

  bookView.createPage = function () {
    $('.container').hide();
    $('.create-page').show();
  }

  module.bookView = bookView;
})(app)

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})




