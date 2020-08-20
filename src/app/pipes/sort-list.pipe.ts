import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {
  // Sort string List
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
