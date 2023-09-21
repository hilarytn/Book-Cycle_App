import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function useNotification() {

    const showSuccess = (message: string) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const showError = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const showInfo = (message: string) => {
        toast.info(message, {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const showWarning = (message: string) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    return {
        showSuccess,
        showError,
        showInfo,
        showWarning
    }
}

export default useNotification