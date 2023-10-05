import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/features/userSlice";
import PageEnum from "../utils/enums";


const useSetCurrentPage = (page: PageEnum) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(page));
  }, [dispatch, page]);
}

export default useSetCurrentPage;