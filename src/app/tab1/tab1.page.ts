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

  tryConnect(){
    this.presentLoadingWithOptions();
    setTimeout(() => {
      this.successRegisterAlert()
    }, 3000);
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 3000,
      message: 'Conectando...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  
  async successRegisterAlert() {
    const alert = await this.alertController.create({
      header: 'Pareado!',
      message: 'Seu Gardener - Estufa 01 foi conectado com sucesso e está pronto para uso!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
