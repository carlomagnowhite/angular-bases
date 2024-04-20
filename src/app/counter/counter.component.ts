import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button id="increase" (click)="increaseBy()">+1</button>
    <button id="decrement" (click)="decrementBy()">-1</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent {

  public counter: number = 0;

  increaseBy(): void{
    this.counter++;
  }

  decrementBy(): void{
    this.counter--;
  }

  reset(): void{
    this.counter = 0;
  }
}
