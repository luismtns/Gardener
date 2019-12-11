import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user_info:Object;

  packages_list:Object[] = [
    {
      "title": "Pacote de Temperos",
      "text": "hortlã, manjericão, alecrim e salsinha",
      "badge": "Iniciante",
      "badgeColor": "success",
      "image": "/assets/images/temperos.jpg"
    },
    {
      "title": "Pacote de Diversidades",
      "text": "morango, tomate cereja, pepino e beringela",
      "badge": "Avançado",
      "badgeColor": "danger",
      "image": "/assets/images/diversidades.jpg"
    },
    {
      "title": "Pacote de Hortaliças",
      "text": "alface, rúcula e tomilho",
      "badge": "Intermediario",
      "badgeColor": "warning",
      "image": "/assets/images/hortalicas.jpg"
    },
    {
      "title": "Pacote de Raízes",
      "text": "batata, cenoura, beterraba e rabanete",
      "badge": "Avançado",
      "badgeColor": "danger",
      "image": "/assets/images/raizes.jpg"
    },
    {
      "title": "Pacote de Ervas Aromáticas",
      "text": "coentro, erva-cidreira e oregão",
      "badge": "Iniciante",
      "badgeColor": "success",
      "image": "/assets/images/ervas.jpg"
    },
  ]

  constructor(
    private authService: FirebaseService,
    private router: Router
  ) {
    this.authService.userDetails().then(res=>this.user_info = res);
  }

  goRaizes(type:any){
    if(type == "Pacote de Raízes"){
      this.router.navigateByUrl("/pack-raizes/false")
    }else{
      return false
    }
  }

}
