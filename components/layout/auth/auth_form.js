import classes from './auth_form.module.css'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
const AuthLayout = (props) => {
    const [isLogin, setIsLogin] = useState(props.authType)
    const emInpRef = useRef()
    const pwInpRef = useRef()
    const router = useRouter();
    const authFormSubmitHdl = (e) => {
        e.preventDefault()
        const entEm = emInpRef.current.value
        const pwEm = pwInpRef.current.value

        if (isLogin) {
            // send api.
        }
        else {
            
        }

    }
    const forgotEmHdl = () => {
        // router.push('/forgot_email')
    }
    const switchAuthModeHdl = () => {
        setIsLogin(previousState => !previousState)
    }
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.boxContainer}>
                    <div className={`${classes.centeringContainer} ${classes.sixteenpxSpacing}`}>
                        <Link href='/' >
                            <a>
                                <div className={classes.brand}>Amazing</div>
                            </a>
                        </Link>
                    </div>
                    <div className={` ${classes.centeringContainer} ${classes.sixteenpxSpacing} ${classes.titleContainer} `}>
                        <div className={` ${classes.eightpxSpacing} ${classes.featureName} `}>
                        { isLogin?  'SignUp' : ''}
                        </div>
                        <div style={{fontSize: '1rem', color:'#ababab'}}>
                        { isLogin?  'To continue to the shopping cart.' : ''}
                        </div>
                    </div>
                    <form onSubmit={authFormSubmitHdl} className={classes.formContainer} >
                        <div className={`${classes.sixteenpxSpacing} ${classes.fieldContainer}`} >
                            <label htmlFor='email' className={`${classes.eightpxSpacing}`}>Your Email</label>
                            <input type='email' id='email' required ref={emInpRef}/>
                        </div>
                        <div className={`${classes.sixteenpxSpacing}  ${classes.fieldContainer}`} >
                            <label htmlFor='password' className={`${classes.eightpxSpacing}`}>Your Password</label>
                            <input type='password' id='password' required ref={pwInpRef}/>
                        </div>
                        <div className={`${classes.sixteenpxSpacing} ${classes.fieldContainer}`} >
                            <button type='button' 
                            className={`${classes.forgotPwBtn} ${classes.spaBtns} ${classes.allBtns} ${classes.thirtysevenpxSpacing}`} 
                            onClick={forgotEmHdl}>
                                Forgot email?
                            </button>
                        </div>
                        <div className={`${classes.fieldContainer} ${classes.btnsSpaceBetween}`} >
                            <button type='button' 
                            className={`${classes.auth_switchBtn} ${classes.spaBtns} ${classes.allBtns}`} 
                            onClick={switchAuthModeHdl}> 
                                { isLogin? 'Create new account': 'Login with existing account' }
                            </button>
                            <button
                            className={`${classes.formMainBtn} ${classes.allBtns}`} 
                            >
                                { isLogin?  'Login' : 'SignUp'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default AuthLayout