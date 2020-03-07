namespace hospital{
    export class Medico extends Funcionario{
        private crm: int;
        private especialidade: int;

        getCrm(): int{
            return this.crm;
        }

        setCrm(crm: int):void{
            this.crm = crm;
        }

         getEspecialidade(): int{
            return this.especialidade;
        }

        setEspecialidade(especialidade: int):void{
            this.especialidade = especialidade;
        }
        
    }
}