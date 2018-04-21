var app = app || {};

(module => {

   const createPage = {}

   createPage.init = () => {
       $('#create-page').off().on('submit', 'form', (event) => {
           event.preventDefault()
           const name = $('#create-form-name').val()
           app.Book.create({ name }).then(page('/'))
           $('#create-form-name').val('')
       })

       $('#create-page').show()
   }

   module.createPage = createPage

})(app)
