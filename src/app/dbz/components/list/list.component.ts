import { Component, Input } from '@angular/core';
import { IDBZCharacter } from '../../services/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: IDBZCharacter[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];
}
