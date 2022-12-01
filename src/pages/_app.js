import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import MyThemeContext from '@/store/theme/'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <MyThemeContext enableSystem={true} attribute="class">
        <SessionProvider session={session}>
              <Component {...pageProps} />
        </SessionProvider>
    </MyThemeContext>
    )
}
export default MyApp
