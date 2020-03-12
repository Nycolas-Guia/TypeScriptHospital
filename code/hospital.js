var pessoa;
(function (pessoa) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this.funcionario = [];
            this.medico = [];
            this.paciente = [];
        }
        Hospital.prototype.getNomeHospital = function () {
            return this.nomeHospital;
        };
        Hospital.prototype.setNomeHospital = function (nome) {
            this.nomeHospital = nome;
        };
        Hospital.prototype.addFuncionario = function (funcionario) {
            this.funcionario.push(funcionario);
        };
        Hospital.prototype.addMedico = function (medico) {
            this.medico.push(medico);
        };
        Hospital.prototype.addPaciente = function (paciente) {
            this.paciente.push(paciente);
        };
        Hospital.prototype.getFuncionario = function () {
            return this.funcionario;
        };
        Hospital.prototype.getPaciente = function () {
            return this.paciente;
        };
        return Hospital;
    }());
    pessoa.Hospital = Hospital;
})(pessoa || (pessoa = {}));
