import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeStyle'
})
export class SafeStylePipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer)
  {
    this.sanitizer = sanitizer;
  }

  transform(value: any): any {
    if (typeof value === 'undefined' || value === '')
    {
      return 'url(../../assets/default-profile.png)';
    }
    return this.sanitizer.bypassSecurityTrustStyle('url("' + value + '")');
  }

}
