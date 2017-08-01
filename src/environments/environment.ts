// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  facebook: {
    clientId: '154162121819405',
    redirectUri: 'http://localhost:9001/auth/facebook/callback'
  },
  google: {
    clientId: '357342618954-d8nhljjg22hrck3ho55m06qucv6frm2e.apps.googleusercontent.com',
    redirectUri: 'http://localhost:9001/auth/google/callback'
  },
  instagram: {
    clientId: '529db0f79582448793bc2fa364efead3',
    redirectUri: 'http://localhost:9001/auth/instagram/callback'
  },
  twitter: {
    clientId: 'w731RLPlFdIsDLz5gNz9ivU29',
    redirectUri: 'http://localhost:9001/auth/twitter/callback'
  }
};
