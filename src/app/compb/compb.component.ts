import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.css']
})
export class CompbComponent implements OnInit {

  @Input() inicioDebate: string = "";
  respuesta: string = "";
  preguntar: string = "";

  constructor( ) { }

  ngOnInit(): void {
  }

  efectuarPregunta(e: any){
    this.preguntar = ("¿" + e + "?");
  }

  recibirRespuesta(e:any) {
    this.respuesta = e;
  }


}
