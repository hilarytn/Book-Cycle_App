
import { RegisterForm, LoginForm } from '../utils/types/formType';
import useAxios from './useAxios';
import useNotification from './useNotification';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUser, logoutUser } from '../redux/features/userSlice';
import { AppDispatch } from '../redux/store';



const useAuth = () => {

    const { axiosInstance } = useAxios();
    const { showSuccess, showError } = useNotification();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const registerUser = (data: RegisterForm) => {
        axiosInstance.post('/user/register', data)
            .then(res => {
                showSuccess(`${res.data.firstName} ${res.data.lastName} registered successfully!`)
                navigate('/login')
            })
            .catch(err => {
                showError(err.response.data.error)
            })
    }

    const loginUser = (data: LoginForm) => {
        axiosInstance.post('/user/login', data)
            .then(res => {
                showSuccess(`logged in successfully!`)
                dispatch(setUser(res.data.result))
                dispatch(setToken({
                    token: res.data.token,
                    refreshToken: res.data.refreshToken
                }))
                navigate('/')
            })
            .catch(err => {
                showError(err.response.data.message)
            })
    }

    const logout = () => {
        dispatch(logoutUser)
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        navigate('/login')
    }

    return { registerUser, loginUser, logout }
}

export default useAuth;