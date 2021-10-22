import {useUp} from "use-up";
import '../styles/globals.css';

if (useUp) {
  useUp({
    debug: true,
    project: {
      name: 'Up Toolkit Demo',
      logo: {
        src: '/img/logo.svg',
      },
      url: '/'
    },
    storeMode: 'reactive', // could be reactive|vuex
    // store: store, // if defined you can define your vuex store if you choose vuex
    api: {
      url: 'https://uptoolkit/demo/api', // Replace with your api endpoint
    },
    translations: {
      en_EN: {
        hello: 'Hello World !',
      },
      fr_FR: {
        hello: 'Bonjour le monde',
      },
    },
    locale: 'en_EN',
    locales: [
      'en_EN', 'fr_FR'
    ],
  });
}

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
