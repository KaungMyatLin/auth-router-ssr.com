import classes from './auth_layout.module.css'
import Link from 'next/link'
const AuthLayout = (props) => {
    const authFormSubmitHdl = () => {
        
    }
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.boxContainer}>
                    <div className={`${classes.centeringContainer} ${classes.marginBtmSeparator}`}>
                        <Link href='/' >
                            <a>
                                <div className={classes.brand}>Amazing</div>
                            </a>
                        </Link>
                    </div>
                    <div className={`${classes.marginBtmSeparator} ${classes.centeringContainer} ${classes.featureName}`} style={{marginTop:0}}>
                        Login
                    </div>
                    <form onSubmit={authFormSubmitHdl} className={`${classes.centeringContainer}`}>
                        <div className={`${classes.marginBtmSeparator}`} >
                            
                        </div>
                        <button>{props.formType}</button>
                        <button type='button'>Forgot password?</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default AuthLayout