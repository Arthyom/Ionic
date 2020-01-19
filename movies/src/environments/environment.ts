// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  Movies_GeneralURL:  'https://api.themoviedb.org/3/discover/movie?api_key=9f7e4513aaf4d4ac2e012c440b706a3d&language=es-MX&primary_release_year=',
  Movies_ImagesURL: 'https://image.tmdb.org/t/p/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
