var pessoa;
(function (pessoa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        Pessoa.prototype.setCpf = function () {
            return this.cpf;
        };
        //mostra o valor
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        //altera o valor
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        return Pessoa;
    }());
    pessoa.Pessoa = Pessoa;
})(pessoa || (pessoa = {}));
