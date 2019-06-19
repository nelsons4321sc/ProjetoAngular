import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  funcionarios = [];
  //chamado pelo app.component.html
  aoAdicionar(objFuncCard){
    this.funcionarios.push(objFuncCard);

  }

 /* 
  idade = 27;
  
  getIdade() {
    return this.idade;
  }
 
  alterarNome(event: any){
  this.nome = event.target.value;  
  }
  */
}

