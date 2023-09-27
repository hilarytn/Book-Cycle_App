import { useEffect, useState } from "react";

import useAxios from "./useAxios";
import useNotification from "./useNotification";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/features/usersSlice";
import { FetchError } from "../utils/types/errorType";


const useUser = () => {

    const { protectedInstance } = useAxios()
    const { showError } = useNotification()
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState<boolean>(false)
    

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true)
                const response = await protectedInstance.get('users')
                dispatch(setUsers(response.data))
            } catch (err) {
                console.log(err)
                const error = err as FetchError
                showError(error.response.data.error)
            } finally {
                setLoading(false)
            }
        }
        getUsers()
    },[dispatch])

    return { loading }
}

export default useUser;