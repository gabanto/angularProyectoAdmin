import { Component, OnDestroy } from '@angular/core';

import { Observable, interval, Subscription } from 'rxjs';

//import * as rxjs from 'rxjs';

import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

	public intervalSubs: Subscription;	


  constructor() { 

  	


  	// this.retornaObservable().pipe(

  	// 	retry(1)

  	// ).subscribe(

  	// 	valor => console.log('Subs:', valor),
  	// 	error => console.warn('Error:', error),
  	// 	()=>console.info('Obs terminado')
  	// );
  	this.intervalSubs = this.retornaIntervalo().subscribe(console.log);


  }//fin constructor

//Si cambia el usuario a otra pestaña lo desconecta al Observable con este Metodo
  ngOnDestroy():void{

  	//throw new Error("Metodo no implements");
  	this.intervalSubs.unsubscribe();
  	
  }

  // operadores
  retornaIntervalo(): Observable<number>{

	  	return interval(500)
			.pipe(
				 take(10),
				 map( valor=> valor+1),
				 filter(valor => ( valor % 2 === 0) ? true:false ),
				 
			);

  	//return intervalo$;

  }


  
  retornaObservable():Observable<number>{

  	let i= -1;

  	return new Observable<number>( observer => {
  		

  		const intervalo = setInterval(()=>{
  			i++;

  			observer.next(i);

  			if( i === 4 ) {
  				clearInterval( intervalo );
  				observer.complete();
  			}

  			if( i===2 ){
  				observer.error('i llego al valor 2');
  			}

  		}, 1000);

  	});

  	

  }//fin funcion



}
