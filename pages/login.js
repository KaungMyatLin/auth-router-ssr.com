import { useState } from 'react'
import AuthLayout from '@cmpnt/layout/auth/auth_layout'
import { useRouter } from 'next/router';

const login = () => {
    const [isLoading, setIsLoading ] = useState(true)
    const router = useRouter();
    return (
        <AuthLayout />
    )
}
export default login