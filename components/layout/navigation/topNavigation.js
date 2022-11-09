import Link from 'next/link'
import { useSession } from 'next-auth/react'
import classes from './topNavigation.module.css'
const TopNavigation = (props) => {
    const { status } = useSession();
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
                </ul>
            </nav>
        </header>
    )
}

export default TopNavigation