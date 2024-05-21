import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): unknown {
    return value? 'Can Fly!': 'Can not fly';
  }

}
