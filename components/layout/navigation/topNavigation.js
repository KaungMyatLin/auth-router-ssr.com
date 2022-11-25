import Link from 'next/link'
import { useSession } from 'next-auth/react'
import classes from './topNavigation.module.css'
import { useTheme } from 'next-themes'
const TopNavigation = (props) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted (true)
    
      return () => {
        second
      }
    }, [third])
    

    const { status } = useSession();
    const renderThemeChanger = () => {
        if (!mounted ) return null;
        const currTheme = theme === 'system' ? systemTheme : theme;

        if (currTheme === 'dark') {
            return (
                <SunIcon className="w-7 h-7" role="button" onClick={()=> setTheme('light')} />
            )
        }
        else {
            return (
                <MoonIcon className="w-7 h-7" role="button" onClick={()=> setTheme('dark')} />
            )
        }
    }

    console.log(props)
    return (
        <header className={classes.header}>
            <Link href='/' >
                <a>
                    <div className={classes.brand_name}>Amazing</div>
                </a>
            </Link>
            <nav>
                <ul>
                    { status === 'unauthenticated' && 
                        <>
                            <li>
                                <Link href='/login'>Login</Link>
                            </li>
                            <li>
                                <Link href='/signup'>Signup</Link>
                            </li>
                        </>
                    }
                    { status === 'authenticated' && 
                        <>
                            <li>
                                <Link href='/profile'>Profile</Link>
                            </li>
                            <li>
                                <Link href='/logout'>logout</Link>
                            </li>
                        </>
                    }
                    <renderThemeChanger/>
                </ul>
            </nav>
        </header>
    )
}

export default TopNavigation