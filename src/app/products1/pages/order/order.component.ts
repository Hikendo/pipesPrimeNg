import { Component } from '@angular/core';
import { Hero,Color } from '../../interfaces/hero';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public isUppercase:boolean =false;
  public orderBy?: keyof Hero;
  public heroes: Hero[] = [
    { name: 'Capitán Centella', canFly: true, color: Color.Rojo },
    { name: 'Mujer Maravilla', canFly: true, color: Color.Azul },
    { name: 'Hombre Verde', canFly: false, color: Color.Verde },
    { name: 'Rayo Amarillo', canFly: true, color: Color.Amarillo },
    { name: 'Caballero Oscuro', canFly: false, color: Color.Negro }
  ];
  toogleUpperCase():void{
    this.isUppercase= !this.isUppercase;
  }
  changeOrder(value: keyof Hero){
    this.orderBy=value;

  }

}
