import * as functions from "firebase-functions"
import * as Nuxt from "nuxt"
import * as nuxtConfig from "./nuxt.config"

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: 'nuxt'
}

const nuxt = new Nuxt(config)

export const ssr = functions.https.onRequest(async (request, response) => {
    await nuxt.ready()
    nuxt.render(request, response)
});
