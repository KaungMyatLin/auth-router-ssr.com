import classes from './auth_form.module.scss'
// import './auth_form.module.scss' cannot do this.
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Field, ErrorMessage, useFormik } from 'formik'
import { schemaValidation } from '@/lib/shared/validation'
import simpleErrMsg from '../ui/error/simpleErrMsg_w._hocPattern'
import CustInp from '../ui/custInp'

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
        let err = {}
    }
    const onSubmitHdl = async(event) => {
        // event.preventDefault();
        const entEm = emInpRef.current.value
        const entPw = pwInpRef.current.value

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
                        console.log(formlevelValues)
                        const {dirty, errors, getFieldHelpers, getFieldMeta, getFieldProps, 
                            handleBlur, handleChange, handleReset, isValid, status, touched, validateField, validateForm } = formlevelValues;
                        return (
                        <form className={classes.formContainer} >
                            <div className={`${classes.sixteenpxSpacing} ${classes.fieldContainer} ${classes.fieldContainerThatHasErrorDiv} `} >
                                <label htmlFor='email' className={`${classes.eightpxSpacing}`}>Your Email</label>
                                {/* <Field type='email' id='email' name='email' required
                                // // ref={emInpRef}
                                // // onChange={formik.handleChange}
                                // // onBlur={formik.handleBlur}
                                // // value={formik.values.email}
                                // // { ...formik.getFieldProps('email')}
                                /> */}
                                <Field name='email' required>
                                    { props => {
                                        const {field, form, meta} = props
                                        return (
                                            <div>
                                                <input type='email' id='email' {...field} />
                                                {/* { meta.touched && meta.error? <div>{meta.error}</div> : null } */}
                                            </div>
                                        )}
                                    }
                                </Field>
                                {/* { formik.touched.email && formik.errors.email? (
                                    <div className='error'>{formik.errors.email}</div>
                                ): null} */}
                                {/* <ErrorMessage name='email' component='div' /> */}
                                <ErrorMessage name='email' >
                                    { errMsg => {
                                        return (<div className={classes.error}>{errMsg}</div>)
                                        }
                                    }
                                </ErrorMessage>
                            </div>
                            <div className={`${classes.sixteenpxSpacing}  ${classes.fieldContainer} ${classes.fieldContainerThatHasErrorDiv} `} >
                                <label htmlFor='password' className={`${classes.eightpxSpacing}`}>Your Password</label>
                                <Field type='password' id='password' name='password' required component={CustInp}
                                />
                                <ErrorMessage name='password' component={simpleErrMsg} className='formSimpleErrMsgDiv'/>
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
                                <button type="submit" disabled={!isValid}
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