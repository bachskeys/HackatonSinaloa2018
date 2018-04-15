// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB_482PHeroT_R4R68aG14dtlirpFzoFtw',
    authDomain: 'hackaton-17e3d.firebaseapp.com',
    databaseURL: 'https://hackaton-17e3d.firebaseio.com',
    projectId: 'hackaton-17e3d',
    storageBucket: 'hackaton-17e3d.appspot.com',
    messagingSenderId: '647009162703'
  }
};
