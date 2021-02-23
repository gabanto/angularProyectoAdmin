import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass =`btn ${ this.btnClass }`;
  }

  @Input('valor') progreso: number = 50; //renombrar el argumento y se llama en el padre como "valor"
  //@Input() progreso: number = 50;
  @Input() btnClass:string = 'btn-primary'; 

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  
  getCambiarValor( valor:number ){

    //Si llega a pasar de 100
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso=100;
    }

    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    
    this.progreso = this.progreso + valor
    //this.progreso = this.progreso + valor
    this.valorSalida.emit(this.progreso); //hace que el valor se muestre en la primera barra

    return this.progreso;

  }

   //constructor() { }

   onChange( nuevoValor:number ){
     //console.log( event );
     //this.valorSalida.emit(event);
     if(nuevoValor >=100){
       this.progreso=100;
     }else if(nuevoValor <= 0){
       this.progreso=0;
     }else{
       this.progreso = nuevoValor;
     }

     this.valorSalida.emit( this.progreso );

   }

   

}
