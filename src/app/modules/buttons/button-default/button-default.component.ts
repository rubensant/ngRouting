import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss']
})
export class ButtonDefaultComponent {

  @Input() texto: string = 'sin texto'
  @Input() onClickButton: any = null

  constructor(){}
}
