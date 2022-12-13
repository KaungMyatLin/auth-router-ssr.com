import Link from 'next/link'
import { useSession } from 'next-auth/react'
import classes from './topNavigation.module.css'
import { useContext } from 'react'
import { MyThemeContext } from '@/store/theme/MyThemeContext'
// import { MyThemeContext } from '@/store/theme/MyThemeContext.tsx'

const TopNavigation = () => {
    const ctx = useContext(MyThemeContext);

    const togThemeHdl = () => {
        ctx.togThemeHdl()
    }

    const { status } = useSession();
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
                    <button type='button' onClick={togThemeHdl}>Toggle theme</button>
                </ul>
            </nav>
        </header>
    )
}

export default TopNavigation