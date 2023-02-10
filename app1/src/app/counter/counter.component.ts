import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  // class property
  counter = 0; 

  // method to increment value 
  increment() {
    this.counter++;
  }

  // method to decrement value
  decrement() {
    this.counter--;
  }
}
