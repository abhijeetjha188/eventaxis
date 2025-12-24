import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength',
  standalone: false,
})
export class StrengthPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let res;
    const num = Number(value);
    if (num < 10) {
      res = 'weak'
    } else if (num >= 10 && num < 100) {
      res = 'strong'
    } else {
      res = 'strongest'
    }
    return res
  }

}
