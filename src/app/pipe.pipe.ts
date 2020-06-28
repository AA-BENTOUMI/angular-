import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any [], search: string ): any {
    if ( search === '' || search === undefined || search === null ) {
      return value ;
    }
    // search = search.toLowerCase();
    return value.filter(cherch => cherch.name.includes(search));
  }

}
