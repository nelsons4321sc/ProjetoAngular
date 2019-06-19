import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css'],
  styles: [`
    .card-block{
      text-transform: uppercase;
      color: blue;
    }
  `]

})
export class FuncionarioCardComponent {
// posso usar tanto só o nome dentro do parenteses
 @Input() funcionario: any;

 isAdmin() {
   return this.funcionario.nome.startsWith('C');
}

 getEstilosCartao() {
   return {
     'border-width.px': this.funcionario.id,
     backgroundColor: this.funcionario.id % 2 === 0
     ? 'lightblue' : 'lightgreen'
   };
 }
 /*
 @Input - usado para que a variável possa ser vista fora dessa classe pela app.component.html
 Entrada de eventos
 como posso usar só o nome da variável
@Input() funcionario: any;
 */
}
