import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDuration'
})

export class TimeDurationPipe implements PipeTransform {

  transform(time: number): string {
    const hours = Math.floor(time / 60);
    const minutes = Math.floor(time) % 60;

    return `${hours ? hours + 'h ' : ''}${minutes}min`;
  }
}
