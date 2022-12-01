import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import MyThemeContext from '@/store/theme/'
import { useContext } from 'react'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  const {theme} = useContext(MyThemeContext)
  return (
    <MyThemeContext enableSystem={true} attribute="class">
      {value =>(
        <SessionProvider session={session}>
              <Component {...pageProps} className={theme} />
        </SessionProvider>
      )
      }
    </MyThemeContext>
    )
}
export default MyApp
