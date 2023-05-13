import { Pipe, PipeTransform } from '@angular/core';
import { product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  // --?-- işareti varmı anlamında kullanılır varsa şunu yap gibisinden
  //=> her bir ürün için anlamına gelir
  transform(value: product[], filterText?: any): product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null

    return filterText ? value.filter((p: product) => p.name.toLocaleLowerCase().
      indexOf(filterText) !== -1) : value;
  }

}
