import { Component } from '@angular/core';
import { IDBZCharacter } from '../services/character.interface';



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: IDBZCharacter[] =
  [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    }
  ];
}
