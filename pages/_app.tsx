import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import '../components/Layout.js'
import '@vercel/examples-ui/globals.css'
import Layout from '../components/Layout.js';

function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default App
