import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user_info:Object;

  packages_list:Object[] = [
    {
      "title": "Pacote de Raízes",
      "text": "batata, cenoura, beterraba e rabanete",
      "badge": "Avançado",
      "badgeColor": "danger",
      "image": "/assets/images/raizes.jpg"
    },
  ]

  constructor(
    private authService: FirebaseService,
    private router: Router
  ) {
    this.authService.userDetails().then(res=>this.user_info = res);
  }

  
  goRaizes(){
    this.router.navigateByUrl("/pack-raizes/true")
  }

}
