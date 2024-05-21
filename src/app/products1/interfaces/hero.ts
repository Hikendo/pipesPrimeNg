export enum Color {
  Rojo = 'red',
  Azul = 'blue',
  Verde = 'green',
  Amarillo = 'yellow',
  Negro = 'black'
}
export interface Hero {
name: string;
canFly: boolean;
color: Color;
}
