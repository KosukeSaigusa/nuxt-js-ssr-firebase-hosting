import * as functions from 'firebase-functions';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Nuxt} from 'nuxt';

const nuxt = new Nuxt({
  dev: false,
  debug: false,
  buildDir: 'nuxt',
});

export const nuxtApp = functions
    .https.onRequest(async (request, response) => {
      await nuxt.ready();
      nuxt.render(request, response);
    });
