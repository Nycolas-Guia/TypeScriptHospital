namespace hospital{
    export class Hospital{
        private nomeHospital:string|undefined;
        private funcionario: Array<Funcionario> = [];
        private medico: Array<Medico> = [];
        private paciente: Array<Paciente> = [];

        getNomeHospital():string|undefined{
            return this.nomeHospital;
        }

        setNomeHospital(nome:string):void{
            this.nomeHospital = nome;
        }

        addFuncionario(funcionario:Funcionario):void{
            this.funcionario.push(funcionario);
        }

        addMedico(medico:Medico):void{
            this.medico.push(medico);
        }

         addPaciente(medico:Paciente):void{
            this.paciente.push(paciente);
        }

        getFuncionario(){
            return this.funcionario;
        }

        getPaciente(){
            return this.paciente;
        }
            
    }

}