import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  show_login:boolean = false;
  show_register:boolean = false;

  validations_form: FormGroup;
  register_form: FormGroup;
  error_message: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: FirebaseService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
    });
    
    this.register_form = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      telefone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'E-mail não pode estar vazio!' },
      { type: 'email', message: 'Por favor, insira um e-mail válido!' }
    ],
    'password': [
      { type: 'required', message: 'Senha não pode estar vazio!' },
      { type: 'minlength', message: 'A senha precisa de pelo menos 8 caracteres.' }
    ]
  };

  changeLoginRegister(login_type:string){
    if(!login_type){
      return false
    }
    if(login_type == 'L'){
      this.show_login = true;
      this.show_register = false;
    }else if(login_type == 'R'){
      this.show_login = false;
      this.show_register = true;
    }else{
      return false
    }
  }

  loginUser(value){
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.error_message = "";
      alert('sucesso!')
    }, err => {
      console.log(err);
      this.error_message = err.message;
    })
  }

  tryRegister(value){
    this.authService.registerUser(value)
     .then(res => {
       console.log(res);
       this.error_message = "";
        alert("Your account has been created. Please log in.");
     }, err => {
       console.log(err);
       this.error_message = err.message;
     })
  }
}
