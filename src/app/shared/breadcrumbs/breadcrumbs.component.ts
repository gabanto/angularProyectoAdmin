import { Component, OnInit } from '@angular/core';
//import { Subscription } from 'rxjs';

import { Router, ActivationEnd} from '@angular/router';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent{

	public titulo: string;
		

  constructor( 	

	private router:Router, 

  ) {

	this.titulo=""; 
	this.getRutaDemo();

   }


   

    getRutaDemo(){
    	
    	this.router.events.pipe(

    		filter(evento => evento instanceof ActivationEnd),
			map(e => e as ActivationEnd)		

    	)
    	.subscribe(event => {
			
			if(event.snapshot.data.titulo !=undefined){
				this.titulo=event.snapshot.data.titulo;
				document.title = ` Admin - ${ this.titulo }`;

				//console.log(event.snapshot.data.titulo);
			}
			
    	})
    }


  // ngOnDestroy(): void {
  //   this.titleSubs$.unsubscribe();
  // }



//    getRuta(){

// 	  //  	this.router.events.pipe(

// 	  //  	   filter( event => event instanceof ActivationEnd ),
// 			// filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
// 			// map( (event:ActivationEnd) => event.snapshot.data)
// 	  // 	)
// 	  // 	.subscribe( event => {

// 	  // 		//this.titulo=event;

// 			//   console.log(event);

// 	  // 	 });  
//   }


 
}
