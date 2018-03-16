import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPipe'
})
export class HighlightPipe implements PipeTransform {

  // transform(value: string, args: string): any {
  //   if (args && value) {
  //       value = String(value); // make sure its a string
  //       let startIndex = value.toLowerCase().indexOf(args.toLowerCase());
  //       if (startIndex != -1) {
  //           let endLength = args.length;
  //           let matchingString = value.substr(startIndex, endLength);
  //           return value.replace(matchingString, `<mark>${matchingString}</mark>`);
  //       }
  //   }
  //   return value;
  // }

  transform(text: string, search: string): any {
    if (text && search) {
      let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      pattern = pattern.split(' ').filter((t) => {
        return t.length > 0;
      }).join('|');
      let regex = new RegExp(pattern, 'gi');

      return search ? text.replace(regex, (match) => `<mark>${match}</mark>`) : text;
    }
    else {
      return text;
    }
  }

}
