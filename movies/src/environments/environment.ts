// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  Movies_Genres: 'https://api.themoviedb.org/3/genre/movie/list?api_key=1865f43a0549ca50d341dd9ab8b29f49&language=es&include_image_language=es',
  Movies_GeneralURL:  'https://api.themoviedb.org/3/discover/movie?api_key=9f7e4513aaf4d4ac2e012c440b706a3d&language=es-MX',
  Movies_ImagesURL: 'https://image.tmdb.org/t/p/',
  Movies_FindURL :  'https://api.themoviedb.org/3/search/movie?api_key=9f7e4513aaf4d4ac2e012c440b706a3d&language=es-MX&query={movie}',
  Movies_DetailURL: 'https://api.themoviedb.org/3/movie/{idmovie}?api_key=9f7e4513aaf4d4ac2e012c440b706a3d&language=es-MX',
  Credits_DetailURL: 'https://api.themoviedb.org/3/movie/{idmovie}/credits?api_key=9f7e4513aaf4d4ac2e012c440b706a3d'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
