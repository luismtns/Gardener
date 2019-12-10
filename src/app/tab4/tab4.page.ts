import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  
  user_info:any;

  register_form: FormGroup;
  error_message: string = '';

  spinner:boolean = false;

  constructor(
    private authService: FirebaseService,
    private router: Router,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) {
    this.register_form = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.required
      ])),
      telefone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
    });
  this.getUserDetails();
  }

  getUserDetails(){
    this.authService.userDetails().then(res=>{
      this.user_info = res;
      console.log(this.user_info);
      this.register_form.get('nome').setValue(this.user_info['nome']);
      var tel = this.user_info['ddd'] + this.user_info['telefone'];
      this.register_form.get('telefone').setValue(tel);
    });
  }
  

  updateUserForm(value){
    if(this.register_form.invalid){
      return false
    }
    this.spinner = true;
    this.authService.updateUser(value)
      .then(res=>{
        this.spinner = false;
        this.getUserDetails();
        this.successAlert();
      }, err => {
        this.spinner = false;
        console.log(err);
      });
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Atualizado',
      message: 'Dados atualizados com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

  logout(){
    this.authService.logoutUser()
      .then(res=>{
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
      });
  }

}
