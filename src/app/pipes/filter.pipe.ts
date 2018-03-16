import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: string, searchableList : any)
  {
    if (input) {
       input = input.toLowerCase();
       return value.filter( (el: any) =>
       {
         for(var k in searchableList )
         {
           if(el[searchableList[k]].toLowerCase().indexOf(input) > -1)
           {
            //  el[searchableList[k]] = el[searchableList[k]].replace(input, "<b>" + input + "</b>")
             return el;
           }
         }
      })
    }
    return value;
  }

}
