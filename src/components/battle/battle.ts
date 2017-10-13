import { Component } from '@angular/core';

/**
 * Generated class for the BattleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'battle',
  templateUrl: 'battle.html'
})
export class BattleComponent {

  text: string;

  constructor() {
    console.log('Hello BattleComponent Component');
    this.text = 'Hello World';
  }

}
