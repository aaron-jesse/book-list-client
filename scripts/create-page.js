var app = app || {};

(module => {

   const createView = {}

   createView.init = () => {
       $('#create-book-name').off().on('submit', 'form', (event) => {
           event.preventDefault()
           const name = $('#create-book-name').val()
           app.Book.create({ name }).then(page('/'))
           $('#create-form-name').val('')
       })

       $('#create-page').show()
   }

   module.createView = createView

})(app)
