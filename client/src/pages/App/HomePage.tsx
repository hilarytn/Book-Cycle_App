import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { setCurrentPage } from '../../redux/features/userSlice'
import PageEnum from '../../utils/enums'

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage(PageEnum.Home))
    },[dispatch])

  return (
    <div>
    </div>
  )
}

export default HomePage
