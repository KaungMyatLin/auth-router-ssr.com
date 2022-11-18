import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import ThemeCtxWrapper from '@cmpnt/wrapper/themeCtxWrapper'
import { ThemeContext } from '@cmpnt/ctx/themeCtx'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
      <ThemeCtxWrapper>
        <SessionProvider session={session}>
              <Component {...pageProps} />
        </SessionProvider>
      </ThemeCtxWrapper>
    )
}
export default MyApp
