import BaseLayout from '@/components/layouts/BaseLayout'
import '@/styles/index.css'
import type { AppProps } from 'next/app'
import axios from 'axios'

axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <BaseLayout>
         <Component {...pageProps} />
      </BaseLayout>
   )
}

export default MyApp
