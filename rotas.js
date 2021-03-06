const {Router} = require('express')
const rotas = Router()
const autores = require('./controllers/autores')
const livros = require('./controllers/livros')
const usuarios = require('./controllers/usuarios')

rotas.get('/autores', autores.listarAutores);
rotas.get('/autores/:id', autores.obterAutor);
rotas.post('/autores', autores.cadastrarAutor);
rotas.put('/autores/:id', autores.atualizarAutor);
rotas.delete('autores/:id', autores.excluirAutor);

rotas.get('/livros');
rotas.get('/livros/:id');
rotas.post('/livros');
rotas.put('/livros/:id');
rotas.delete('livros/:id');

rotas.post('/cadastrar', usuarios.cadastrarUsuario)
rotas.post('/login', usuarios.login)

module.exports = rotas