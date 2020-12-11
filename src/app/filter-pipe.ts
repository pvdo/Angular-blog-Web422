import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      console.log("!items" + items);
      return [];
    }
    if (!searchText) {
      console.log("!searchText" + searchText);
      return [];
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      console.log(searchText);
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
