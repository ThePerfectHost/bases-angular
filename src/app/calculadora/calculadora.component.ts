import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  total: number = 0;

  constructor() { }

  @Output()
  emisor = new EventEmitter();

  ngOnInit(): void {
  }

  calcular(operation: string) {
    switch (operation) {
      case "s":
        this.total = this.num1 + this.num2
        break;
      case "r":
        this.total = this.num1 - this.num2
        break;
      case "m":
        this.total = this.num1 * this.num2
        break;
      case "d":
        this.total = this.num1 / this.num2
        break;
      default:
        this.total = -1;
        break;
    }

    this.emisor.emit(this.total);
  }
}
