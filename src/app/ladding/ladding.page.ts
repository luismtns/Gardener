import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ladding',
  templateUrl: './ladding.page.html',
  styleUrls: ['./ladding.page.scss'],
})
export class LaddingPage implements OnInit {

  ladding_itens:Object[] = [
    {
      'step': '01',
      'title': '<strong>Olá, bem vindx ao Gardener!</strong><br>sua nova horta automática ;)',
      'text': 'Nas próximas telas explicaremos como fazer a conexão do app à sua estufa. Estamos aqui para facilitar o plantio e deixar sua vida mais saudável!',
      'last': false
    },
    {
      'step': '02',
      'title': 'Primeiramente, você irá fazer a conexão do seu aparelho com a sua estufa!',
      'text': 'Sua estufa Gardener e seu celular devem estar conectados via Bluetooth para fazer a devida conexão entre os dois dispositivos.',
      'last': false
    },
    {
      'step': '03',
      'title': 'Hora de selecionar seus pacotes de plantio!',
      'text': 'Após conectados, na tela inicial do seu App, você encontrará diversos pacotes de plantio, onde selecionamos quais vegetais poderão ser plantados na mesma estufa, de modo que não haja conflito no crescimento de suas plantas!',
      'last': false
    },
    {
      'step': '04',
      'title': 'Selecionou o pacote?<br>Hora de plantar!',
      'text': 'Cada pacote terão suas devidas informações, e após selecionada o de sua preferência, é só informar ao Gardener que as semenetes já foram plantadas na terra, e nós cuidaremos de todo resto!',
      'last': false
    },
    {
      'step': '05',
      'title': 'Agora é só aguardar sua colheita!',
      'text': 'Após iniciado o ciclo de plantio, o Gardener te informará sobre regas, temperatura de água e solo, e finalmente quando seus vegetais estiverem prontos para colheita!',
      'last': true
    }
  ]

  constructor(
    private authService: FirebaseService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  skipLadding(){
    this.authService.updateLadding(false).then(res=>{
      this.router.navigate(['/dashboard/tab1'])
    })
  }

}
