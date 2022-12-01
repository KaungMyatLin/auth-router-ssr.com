import { useEffect, useState } from 'react'
import AuthLayout from '@/cmpnt/layout/auth/auth_form'
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';

const login = (props) => {
    const [isLoading, setIsLoading ] = useState(true)
    const router = useRouter();
    console.log(props)

    useEffect(() => {
        getSession().then(sessionObj => {
            if (sessionObj) {
                router.replace('/')
            }
            else {
                setIsLoading(false)
            }
        })
    }, [])

    if ( isLoading ) {
        return <p style={{margin: '0 auto'}}>Loading ...</p>
    }

    return (
        <AuthLayout authType={true} />
    )
}
export default login