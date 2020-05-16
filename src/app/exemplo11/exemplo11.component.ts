import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplo11',
  templateUrl: './exemplo11.component.html',
  styleUrls: ['./exemplo11.component.css']
})
export class Exemplo11Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const observable = new Observable(subscriber => {
      subscriber.next(100);
      subscriber.next(2);
      subscriber.next(300);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('Antes de executar o subscribe');
    observable.subscribe({
      next(x) {console.log('Recebeu o valor '+ x);},
      error(err) {console.log('Erro: '+ err);},
      complete() {console.log('Terminou o subscribe');}
    });
    console.log('Ultima linha')
  }

}
