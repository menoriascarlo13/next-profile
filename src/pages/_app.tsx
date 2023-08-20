import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { anicons, figtree } from '@/services/fonts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${anicons.variable} ${figtree.variable}`}>
      {/* <div className='font-anicons icon'>A</div> */}
      <Component {...pageProps} />
    </div>
  );
};

export default App;
