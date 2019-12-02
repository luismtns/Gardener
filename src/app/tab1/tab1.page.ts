import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user_info:Object;

  constructor(
    private authService: FirebaseService,
    private router: Router
  ) {
    this.authService.userDetails().then(res=>{
      this.user_info = res;
    });
  }

}
