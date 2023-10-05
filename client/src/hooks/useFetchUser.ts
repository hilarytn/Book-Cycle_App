import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../redux/features/userSlice";
import useAxios from "./useAxios";
import useNotification from "./useNotification";
import { ServerError } from "../utils/types/errorType";

const useFetchUser = (id: string | undefined) => {
    const { protectedInstance } = useAxios();
    const { showError } = useNotification();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await protectedInstance.get(`user/${id}`);
                dispatch(setUser(response.data));
            } catch (error) {
                console.log(error);
                const err = error as ServerError;
                showError(err.response.data.message);
            }
        };

        getUser();
    }, [dispatch, id, protectedInstance, showError]);

    return { user };
};

export default useFetchUser;
