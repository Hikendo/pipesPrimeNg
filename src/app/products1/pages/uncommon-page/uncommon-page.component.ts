import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18Select
  public name:string='Jose Manuel';
  public gender: 'male' | 'female'= 'male';
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla'
  }
  changeClient(){
    this.name= 'Mariana';
    this.gender='female';
  }
  //i18Plural
  public clients:string[]=[
    "Juan ",
    "María ",
    "Carlos ",
    "Laura ",
    "Pedro ",
    "Ana ",
    "Luis ",
    "Carmen ",
    "José ",
    "Elena "
  ];
  public clientsMap={
    '=0': 'no tenemos clientes en espera',
    '=1': 'un cliente en espera',
    '=2': 'tenemos 2 clientes en espera',
    'other': 'tenemos # clientes en espera'
  }

  deleteClient():void{
    this.clients.shift();
  }

  //key value pipe
      public person = {
        firstName: "Juan",
        lastName: "Pérez",
        age: 28,
        gender: "male",
        address: {
            street: "123 Calle Falsa",
            city: "Madrid",
            state: "Comunidad de Madrid",
            postalCode: "28013",
            country: "España"
        },
        email: "juan.perez@example.com",
        phoneNumber: "+34 600 123 456",
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    //Async Pipe se encarga de la suscripcion y al cambiar de pagina de desuscribe en automatico
    public myObservableTimer: Observable<number>= interval(2000);
    //en las promesas no se cancela ni detiene, pero no manda error por componentes no montados

    public promiseValue: Promise<string>= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('habemus data')
    },3000)});
}
