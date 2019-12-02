import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage implements OnInit {

  recover_form: FormGroup;
  error_message: string = '';
  success_reset: boolean = false;
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authService: FirebaseService,
    ) { }

  ngOnInit() {
    this.recover_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    });
  }

  resetPasswordEmail(value){
    if(this.recover_form.invalid){
      return false
    }
    this.authService.resetPassword(value)
     .then(res => {
       console.log(res);
       this.error_message = "";
       this.success_reset = true;
     }, err => {
       console.log(err);
       this.error_message = err.message;
     })
  }

}
