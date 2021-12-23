import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compc',
  templateUrl: './compc.component.html',
  styleUrls: ['./compc.component.css']
})
export class CompcComponent implements OnInit {

  @Input()
  pregunta: string = "";

  @Output()
  emisor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarRespuesta (){
    this.emisor.emit("En estos momentos no tengo la respuesta exacta...");
  }

}
