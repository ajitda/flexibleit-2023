import useSWR from 'swr'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export const useAuth = ({middleware} = {}) => {
    const navigate = useNavigate();

    const { data: user, error, revalidate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                console.log('get user error ', error)
                if (error.response.status !== 409 ) throw error
                navigate('/login')
            }),
    )

    const logout = async () => {
        if (! error ) {
            console.log('in logged out')
            await axios.post('/logout')
            // revalidate()
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        logout
    }
}
