import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import useNotification from "./useNotification";
import { FetchError } from "../utils/types/errorType";
import { EditFormType } from "../utils/types/formType";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/features/userSlice";

const useEditUser = () => {
    
        const { protectedInstance } = useAxios()
        const { showError, showSuccess } = useNotification()
        const navigate = useNavigate()
        const dispatch = useDispatch()
    
            const editUser = async (id: string | undefined, userData: EditFormType) => {
                console.log(userData)
                try {
                    const response = await protectedInstance.put(`/user/${id}`, userData)
                    console.log(response.data)
                    dispatch(setAuthUser)
                    showSuccess('User has been updated successfully')
                } catch (error) {
                    console.log(error)
                    const err = error as FetchError
                    showError(err.response.data.error)
                    navigate('/profile')
                }
            }
            
            return { editUser }
}


export default useEditUser