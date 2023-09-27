import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";
import useNotification from "./useNotification";
import { FetchError } from "../utils/types/errorType";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/features/userSlice";
import { BookFormType } from "../utils/types/formType";
import { useCallback } from "react";

const usePostBook = () => {
    const dispatch = useDispatch()
    const { protectedInstance } = useAxios()
    const { showError, showSuccess } = useNotification()
    const navigate = useNavigate()

    const postBook = useCallback(async (book: BookFormType) => {
        try {
            const response = await protectedInstance.post('/books', book)
            dispatch(addBook(response.data))
            showSuccess('Book added successfully')
            navigate('/profile')
        } catch (error) {
            const err = error as FetchError
            showError(err.response.data.error)
        }
    }, [dispatch, protectedInstance, showSuccess, navigate, showError]);

    return { postBook }
}

export default usePostBook;
