import type { AppProps } from 'next/app'
import { firebaseConfig } from "../../firebaseConfig";
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;
