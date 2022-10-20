import classes from './auth_layout.module.css'
import Link from 'next/link'
import { useRef } from 'react'
const AuthLayout = (props) => {
    const emInpRef = useRef()
    const pwInpRef = useRef()
    const authFormSubmitHdl = () => {
        
    }
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.boxContainer}>
                    <div className={`${classes.centeringContainer} ${classes.containerSeparator}`}>
                        <Link href='/' >
                            <a>
                                <div className={classes.brand}>Amazing</div>
                            </a>
                        </Link>
                    </div>
                    <div className={` ${classes.centeringContainer} ${classes.containerSeparator} ${classes.featureName}`} style={{marginTop:0}}>
                        Login
                    </div>
                    <form onSubmit={authFormSubmitHdl} >
                        <div className={`${classes.containerSeparator} ${classes.fieldContainer}`} >
                            <label htmlFor='email' className={`${classes.formfieldSeparator}`}>Your Email</label>
                            <input type='email' id='email' required ref={emInpRef}/>
                        </div>
                        <div className={`${classes.containerSeparator}  ${classes.fieldContainer}`} >
                            <label htmlFor='password' className={`${classes.formfieldSeparator}`}>Your Password</label>
                            <input type='password' id='password' required ref={pwInpRef}/>
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