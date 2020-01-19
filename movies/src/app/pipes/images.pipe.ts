import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

let Image_url = 'https://image.tmdb.org/t/p/';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(image: string, size: string= 'w500'): string {
    if ( !image ) {
      return './assets/no-image.jpg';
    }

    console.log(Image_url);
    return `${environment.Movies_ImagesURL}${size}${image}`;
  }

}
