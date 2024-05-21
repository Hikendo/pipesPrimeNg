import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleeCase'
})
export class ToogglePipeTsPipe implements PipeTransform {

  transform(value: string, order:boolean=true): string {

    /*
    switch(order){
      case 'asc':
        return value.sort();
      case 'desc':
        return value.sort((a:string,b:string)=> b.localeCompare(a));

      default:
        return value;

    }*/
    return order?value.toUpperCase(): value;
  }

}
