import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import MainLayout from '@cmpnt/layout/Main_layout'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
      <SessionProvider session={session}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
      </SessionProvider>
    )
}
export default MyApp
