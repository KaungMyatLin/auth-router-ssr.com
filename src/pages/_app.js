import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import MyThemeContextProvider from '@/store/theme/'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <MyThemeContextProvider>
        <SessionProvider session={session}>
              <Component {...pageProps}  />
        </SessionProvider>
    </MyThemeContextProvider>
    )
}
export default MyApp
