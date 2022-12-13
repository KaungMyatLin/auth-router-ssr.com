import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import MyThemeContextProvider from '@/store/theme/'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  console.dir(MyThemeContextProvider)
  return (
    <MyThemeContextProvider>
        <SessionProvider session={session}>
              <Component {...pageProps}  />
        </SessionProvider>
    </MyThemeContextProvider>
    )
}
export default MyApp
