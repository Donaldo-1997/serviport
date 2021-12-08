const express = require('express');
const router = express.Router();

// Cargando el modelo <noombre modelo>
const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Testeando ruta book'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json())
        .cathc(error => res.status(400).json({ bobooksfound: 'No se encontraron libros' }));
})

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then( book => res.json())
        .catch( error => res.status(400).json({ nobookfound: 'No se encontro el libro' }));
})

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Book.create(req.body)
      .then(book => res.json({ msg: 'Book added successfully' }))
      .catch(error => res.status(400).json({ error: 'Unable to add this book' }));
  })

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'Updated successfully' }))
      .catch(error => res.status(400).json({ error: 'Unable to update the Database' }));
  });
  
  // @route GET api/books/:id
  // @description Delete book by id
  // @access Public
  router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
      .catch(error => res.status(404).json({ error: 'No such a book' }));
  });
  
  module.exports = router;