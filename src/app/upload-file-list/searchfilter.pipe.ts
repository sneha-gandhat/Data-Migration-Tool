import { File } from './file';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: File[], filtetext: string, ...args: unknown[]): any {
    if(!value){
      return value;
    }
    else{
      return value.filter(file=>file.fileName.toLocaleLowerCase().includes(filtetext.toLocaleLowerCase()));
    }
  }

}
