import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <SessionProvider session={session}>
              <Component {...pageProps} />
        </SessionProvider>
    </ThemeProvider>
    )
}
export default MyApp
