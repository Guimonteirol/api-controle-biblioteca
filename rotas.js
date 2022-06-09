const {Router} = require('express')
const rotas = Router()
const autores = require('./controllers/autores')
const livros = require('./controllers/livros')

rotas.get('/autores', autores.listarAutores);
rotas.get('/autores/:id', autores.obterAutor);
rotas.post('/autores');
rotas.put('/autores/:id');
rotas.delete('autores/:id');

rotas.get('/livros');
rotas.get('/livros/:id');
rotas.post('/livros');
rotas.put('/livros/:id');
rotas.delete('livros/:id');

module.exports = rotas