/* import '../app/assets/styles/globals.scss';
import '../app/assets/styles/old-styles.scss'; */
import '../styles/globals.scss';
import '../styles/old-styles.scss';

import type { AppProps } from 'next/app'
import AuthProvider from '../app/providers/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    
  )
}

export default MyApp