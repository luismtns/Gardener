import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user_info:Object;
  find_bluetooth:boolean = false;
  search_bluetooth:boolean = false;
  connected:boolean = false;

  constructor(
    private authService: FirebaseService,
    private router: Router,
    private loadingController:LoadingController,
    private alertController:AlertController,
  ) {
    this.authService.userDetails().then(res=>{
      this.user_info = res;      
      if(this.user_info['ladding']){
        this.router.navigate(['/ladding']);
      }
    });
    
  }

  ionViewWillEnter() {
    this.search_bluetooth = false;
    this.find_bluetooth = false;
  }

  searchConnect(){
    this.search_bluetooth = true;
    this.find_bluetooth = false;
    setTimeout(() => {
      this.find_bluetooth = true;
    }, 4000);
  }

  tryConnect(){
    this.presentLoadingWithOptions();
    setTimeout(() => {
      this.successRegisterAlert();
      this.connected = true;
    }, 6000);
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 6000,
      message: 'Conectando...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  
  async successRegisterAlert() {
    const alert = await this.alertController.create({
      header: 'Pareado!',
      message: 'Seu Gardener - HC-05 foi conectado com sucesso e está pronto para uso!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
