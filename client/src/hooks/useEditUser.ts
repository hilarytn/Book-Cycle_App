import { useCallback } from "react";
import useAxios from "./useAxios";
import { EditFormType } from "../utils/types/formType";
import useNotification from "./useNotification";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/features/userSlice";
import { ServerError } from "../utils/types/errorType";

const useEditUser = () => {
    const dispatch = useDispatch();
    const { showError, showSuccess } = useNotification();
    const { protectedInstance } = useAxios();

    const editUser = useCallback(async (id: string | undefined, data: EditFormType) => {
        try {
            const response = await protectedInstance.put(`/user/${id}`, data);
            dispatch(setAuthUser(response.data));
            showSuccess('Edit user successfully');
        } catch (error) {
            const err = error as ServerError;
            showError(err.response.data.message);
        }
    }, [dispatch, protectedInstance, showSuccess, showError]);

    return { editUser };
};

export default useEditUser;
