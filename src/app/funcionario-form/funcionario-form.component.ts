import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {
  
  ultimoId = 0;
  nome = 'Nelson';
  adicionado = false;
  //Uma nova propriedade que instancia um emissor de eventos
  //chamada através da um bind de eventos
  //Precisa do decorator - @Output() - saida de eventos - aqui foi completado o bind(pode ser vista fora dessa classe)
  @Output('criado') funcionarioAdicionado = new EventEmitter();
  

  adicionar(){
     this.adicionado = true;

     const funcionario ={
       id: ++this.ultimoId,
       nome: this.nome
     };

     //Abaixo específico qual o momento que será adicionado
     this.funcionarioAdicionado.emit(funcionario);
       
   }

}
