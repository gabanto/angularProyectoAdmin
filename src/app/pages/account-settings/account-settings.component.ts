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



  

}
