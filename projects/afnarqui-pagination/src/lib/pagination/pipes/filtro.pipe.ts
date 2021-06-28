import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, page:number = 0, search: string = '', field: string = 'name'): any[] {
    if ( search.length === 0) {
      return value.slice(page, page + 5)
    }
    
    let filter = value.filter((item: any) => item[`${field}`] === search);
    
    return filter.slice(page, page + 5);
  }

}
