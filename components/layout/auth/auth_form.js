import classes from './auth_form.module.scss'
// import './auth_form.module.scss' cannot do this.
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Field, ErrorMessage, useFormik } from 'formik'
import { schemaValidation } from '@/lib/shared/validation'
import CustInpFields from '../ui/custInp'

const AuthLayout = (props) => {
    const [isLogin, setIsLogin] = useState(props.authType)
    const emInpRef = useRef()
    const pwInpRef = useRef()
    const router = useRouter();
    const initialValues= {
        email: '',
        password: ''
    }
    // const useF = useFormik({
    //     initialValues: initialValues
    // })
    const validatePassword = (value) => {
        console.log(value)
    }
    const onSubmitHdl = async(e) => {
        e.preventDefault();
        const entEm = emInpRef.current.value()
        const entPw = pwInpRef.current.value()
        console.log(entEm)
        console.log(entPw)
        debugger;
        if (isLogin) {
            const result = await signIn('credentials', {
                redirect: false
                , email: entEm
                , password: entPw
            })
            if (result.error) {
                console.log(result.error)
            }
            else {
                router.replace("/profile");
            }
        }
        else {
            try {
                const result_cUser = await createUser(entEm, entPw)
                console.log(result_cUser)
            }
            catch (err) {
                console.log(err)
            }
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
                        { isLogin?  'Login' : 'SignUp'}
                        </div>
                        <div style={{fontSize: '1rem', color:'#ababab'}}>
                        { isLogin?  'To continue to the shopping cart.' : ''}
                        </div>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schemaValidation}
                        onSubmit={onSubmitHdl}
                    >
                    {formlevelValues => {
                        const {dirty, errors, getFieldHelpers, getFieldMeta, getFieldProps, 
                            handleBlur, handleChange, handleReset, isValid, status, touched, validateField, validateForm } = formlevelValues;

                        return (
                        <form className={classes.formContainer} >
                            <div className={`${classes.sixteenpxSpacing} ${classes.fieldContainer} ${classes.fieldContainerThatHasErrorDiv} `} >
                                <label htmlFor='email' className={`${classes.eightpxSpacing}`}>Your Email</label>
                                <Field name='email' required />
                                {/* { formik.touched.email && formik.errors.email? (
                                    <div className='error'>{formik.errors.email}</div>
                                ): null} */}
                                {/* <ErrorMessage name='email' component='div' /> */}
                                <ErrorMessage name='email' className={classes.error} component='div'/>
                            </div>
                            <div className={`${classes.sixteenpxSpacing}  ${classes.fieldContainer} ${classes.fieldContainerThatHasErrorDiv} `} >
                                <label htmlFor='password' className={`${classes.eightpxSpacing}`}>Your Password</label>
                                <Field name='password'>
                                    { props => {
                                        const {field, form, meta} = props
                                        return (
                                            <CustInpFields {...field}  required />
                                        )
                                    }}
                                </Field>
                                <ErrorMessage name='password' className={classes.error} component='div' />
                            </div>
                            <div className={`${classes.sixteenpxSpacing} ${classes.fieldContainer} `} >
                                <button type='button'
                                    className={`${classes.forgotPwBtn} ${classes.spaBtns} ${classes.allBtns} ${classes.thirtysevenpxSpacing}`}
                                    onClick={forgotEmHdl} >
                                    Forgot email?
                                </button>
                            </div>
                            <div className={`${classes.fieldContainer} ${classes.btnsSpaceBetween}`} >
                                <button type='button'
                                    className={`${classes.auth_switchBtn} ${classes.spaBtns} ${classes.allBtns}`}
                                    onClick={switchAuthModeHdl} >
                                        { isLogin? 'Create new account': 'Login with existing account' }
                                </button>
                                <button disabled={!isValid}
                                    className={`${classes.formMainBtn} ${classes.allBtns} ${!isValid?classes.disabled:''}`}
                                >
                                    { isLogin?  'Login' : 'SignUp'}
                                </button>
                            </div>
                        </form>
                    )}}
                    </Formik>
                </div>
            </section>
        </main>
    )
}
export default AuthLayout