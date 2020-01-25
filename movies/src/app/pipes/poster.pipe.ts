import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(images: any[]): any[] {
    return images.filter( img => img.backdrop_path );
  }

}
