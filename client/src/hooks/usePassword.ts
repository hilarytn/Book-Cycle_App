import { useCallback } from 'react';
import useNotification from './useNotification';
import useAxios from './useAxios';
import { FetchError } from '../utils/types/errorType'



const usePassword = () => {
    const { protectedInstance } = useAxios()
    const { showError, showInfo } = useNotification()

    const changePassword = useCallback(async (id: string | undefined) => {
        try {
            const response = await protectedInstance.get(`user/password/${id}`)
            showInfo(response.data.message)
        } catch (error) {
            console.log(error)
            const err = error as FetchError
            showError(err.response.data.error)
        }

    },[protectedInstance, showError, showInfo])

    return { changePassword }
} 

export default usePassword;