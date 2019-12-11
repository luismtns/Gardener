import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pack-raizes',
  templateUrl: './pack-raizes.page.html',
  styleUrls: ['./pack-raizes.page.scss'],
})
export class PackRaizesPage implements OnInit {

  is_active:boolean = false;

  // dynamic data
  umidade_solo:string = 'apropriada';
  litros_reservatorio:number = 2;
  temperatura_estufa:number = 34;
  dias_colheita:number = 73;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private alertController:AlertController,
    private router: Router
    ) {
    }

  ngOnInit() {
    this.is_active = this.route.snapshot.params.active == 'true' ? true : false;
  }

  goBack() {
    this.navCtrl.back();
  }

  selectPackage(){
    this.confirmPackage();
  }

  async confirmPackage() {
    const alert = await this.alertController.create({
      header: 'Olá!',
      message: 'Você realmente deseja selecionar esse pacote de plantio e ativar o Gardener?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.successAdd();
          }
        }, {
          text: 'Não',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async successAdd() {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Pacote de plantio <strong>ativado</strong>!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['/dashboard/tab3'])
          }
        }
      ]
    });

    await alert.present();
  }
  
  unselectPackage(){
    this.cancelPackage();
  }

  async cancelPackage() {
    const alert = await this.alertController.create({
      header: 'Olá!',
      message: 'Você realmente deseja cancelar esse pacote de plantio e desativar o Gardener?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.successRemove();
          }
        }, {
          text: 'Não',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async successRemove() {
    const alert = await this.alertController.create({
      header: 'Feito!',
      message: 'Pacote de plantio <strong>desativado</strong>!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['/dashboard/tab1'])
          }
        }
      ]
    });

    await alert.present();
  }

}
