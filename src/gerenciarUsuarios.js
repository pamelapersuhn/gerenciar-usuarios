const usuarios = ['matheus', 'marcos', 'lucas', 'joão'];

function retornarUsuarios () {
    return usuarios;
}

function adicionaNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionaNovoUsuario
}
