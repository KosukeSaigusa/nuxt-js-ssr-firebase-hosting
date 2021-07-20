import * as functions from "firebase-functions";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {Nuxt} = require("nuxt");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();
const nuxt = new Nuxt({
  dev: false,
  debug: false,
  srcDir: "nuxt",
  build: {
    publicPath: "/assets/",
  },
});

app.use(async (request: any, response: any) => {
  return await nuxt.render(request, response);
});

export const ssr = functions.https.onRequest(app);

// export const ssr = functions.https.onRequest(async (request, response) => {
//     await nuxt.ready()
//     nuxt.render(request, response)
// });
