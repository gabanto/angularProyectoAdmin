import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

//import { SettingsService } from './services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
	 

  constructor( private settingService: SettingsService ) {
    
  }

  //Se dispara despues de haber inicializado el componente
  ngOnInit(): void {

    this.settingService.checkCurrentTheme();

  }

  changeTheme(theme: string){

    this.settingService.changeThemeService(theme);    

  }



  // checkCurrentTheme(){
    

  //   this.links.forEach(elem =>{

  //     elem.classList.remove('working');
  //     const btnTheme = elem.getAttribute('data-theme');
  //     const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
  //     const currentTheme = this.linkTheme.getAttribute('href');

  //     if(btnThemeUrl == currentTheme){
  //       elem.classList.add('working');
  //     }


  //   });

  // }

}
