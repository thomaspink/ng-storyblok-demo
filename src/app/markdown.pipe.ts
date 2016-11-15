import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdown',
  pure: false
})
export class MarkdownPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return typeof value === 'string' ? value.replace('\n','</p><p>') : '';
  }

}
