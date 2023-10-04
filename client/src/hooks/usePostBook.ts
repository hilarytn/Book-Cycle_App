import { useCallback } from "react";
import useAxios from "./useAxios";
import useNotification from "./useNotification";
import { BookFormType } from "../utils/types/formType";
import { FetchError } from "../utils/types/errorType";

function usePostBook() {
  const { protectedInstance } = useAxios();
  const { showSuccess, showError } = useNotification();


  const postBook = useCallback(
    async (book: BookFormType) => {
      protectedInstance.defaults.headers['Content-Type'] = 'multipart/form-data'
      try {
        await protectedInstance.post("/books", book);
        showSuccess("Book successfully added");
      } catch (error) {
        const err = error as FetchError;
        console.log(err.response.data.error);
        showError(err.response.data.error);
      }
    },
    [protectedInstance, showSuccess, showError]
  );

  return { postBook }
}

export default usePostBook;