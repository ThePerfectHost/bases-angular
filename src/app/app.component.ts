import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x = "freezer!";
  rpta: number = 0;

  inicioDebate = "Puede efectuar su pregunta";

  recibirResultado(e: any) {
    this.rpta = e;
  }
}
