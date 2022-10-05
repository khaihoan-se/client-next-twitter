import BaseLayout from '@/components/layouts/BaseLayout'
import '@/styles/index.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <BaseLayout>
         <Component {...pageProps} />
      </BaseLayout>
   )
}

export default MyApp
