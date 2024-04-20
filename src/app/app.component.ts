import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  public title: string = 'Mi primera app en angular';
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
