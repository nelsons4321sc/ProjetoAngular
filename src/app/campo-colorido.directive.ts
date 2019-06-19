import { element } from 'protractor';
import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() cor = 'gray';

  //foi vinculado a cor de fundo
  @HostBinding('style.backgroundColor') corDeFundo: string;

   @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
   }

   @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
   }

}
