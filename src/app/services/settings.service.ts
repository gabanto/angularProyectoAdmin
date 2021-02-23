import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

 private linkTheme = document.querySelector('#theme') as HTMLStyleElement;

 // private links!: NodeListOf<Element>;

  constructor() { 

  	let newCss = localStorage.getItem('theme') || "./assets/css/colors/purple-dark.css"; 
    this.linkTheme.setAttribute('href',newCss);

  }


  changeThemeService(theme: string){

  	const url = `./assets/css/colors/${theme}.css`;

  	this.linkTheme.setAttribute('href',url);
  	
  	localStorage.setItem('theme', url); //alamacenar el color seteado para que no se borre

    this.checkCurrentTheme();

  }


   checkCurrentTheme(){
    //public links!: NodeListOf<Element>;
     const links = document.querySelectorAll('.selector');
    
     links.forEach(elem =>{

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if(btnThemeUrl == currentTheme){
        elem.classList.add('working');
      }


    });

  }


}
