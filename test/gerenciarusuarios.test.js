const { retornarUsuarios, adicionaNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuários na lista', function () {
        // 1. Adicionar um novo nome na lista de usuários
        adicionaNovoUsuario('Maria');

        // 2. Retornar a lista de usuários na caixa lista de usuarios
        const listaDeUsuarios = retornarUsuarios();

        // 3. Comparar se o novo nome está no fim da lista de usuarios
        expect(listaDeUsuarios.at(-1)).to.equal('Maria');
    });
});