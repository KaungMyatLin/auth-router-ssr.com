import classes from './auth_layout.module.css'
import Link from 'next/link'
const AuthLayout = () => {
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.boxContainer}>
                    <div className={classes.Container}>
                        <Link href='/' >
                            <a>
                                <div className={classes.brand}>Amazing</div>
                            </a>
                        </Link>
                    </div>
                    <h1></h1>
                </div>
            </section>
        </main>
    )
}
export default AuthLayout