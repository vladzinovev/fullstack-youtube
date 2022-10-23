/* import '../app/assets/styles/globals.scss';
import '../app/assets/styles/old-styles.scss'; */
import '../app/assets/styles/globals.scss';
import '../app/assets/styles/old-styles.scss';

import type { AppProps } from 'next/app'
import AuthProvider from '../app/providers/AuthProvider';

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
    
    
  )
}

export default MyApp