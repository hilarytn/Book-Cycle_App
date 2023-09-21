import { Link } from "react-router-dom"
import { icons } from "../utils/assets"
import PageEnum from '../utils/enums'
import { selectPage } from '../redux/features/userSlice'
import { useSelector } from 'react-redux' 



const NavModal = () => {

    const page = useSelector(selectPage)
    const activeStyling = 'flex justify-center bg-secondary text-white px-4 py-2 tracking-wider uppercase flex items-center gap-1 tracking-wider cursor-pointer'

  return (
    <div>
         <ul className='flex-row justify-center items-center text-[14px] text-black my-3'>
                    <li className="my-6">
                            <Link
                                className={page === PageEnum.Home ? activeStyling :`flex items-center justify-center gap-1 tracking-wider cursor-pointer hover:bg-secondary hover:text-white hover:p-2 rounded-md uppercase delay-100`}
                                to="/">
                                <icons.homeIcon 
                                    className='text-lg'
                                />
                                <p>Home</p>
                            </Link>
                    </li>
                    <li className="my-6">
                        <Link
                            to="/messaging"
                            className={page === PageEnum.Messaging ? activeStyling :`flex items-center justify-center gap-1 tracking-wider cursor-pointer hover:bg-secondary hover:text-white hover:p-2 rounded-md uppercase delay-100`}
                        >
                            <icons.messageIcon 
                                className='text-lg'
                            />
                            Messaging
                        </Link>
                    </li>
                    <li className="my-6">
                        <Link
                            to="/notifications"
                            className={page === PageEnum.Notification ? activeStyling :`flex items-center justify-center gap-1 tracking-wider cursor-pointer hover:bg-secondary hover:text-white hover:p-2 rounded-md uppercase delay-100`}
                        >
                            <icons.notificationIcon
                                className='text-lg'
                            />
                            Notifications
                        </Link>
                    </li>
                    <li className="my-6">
                        <Link
                            to="/profile"
                            className={page === PageEnum.Profile ? activeStyling :`flex items-center justify-center gap-1 tracking-wider cursor-pointer hover:bg-secondary hover:text-white hover:p-2 rounded-md uppercase delay-100`}
                        >
                            <icons.userIcon 
                                className='text-lg'
                            />
                            Profile
                        </Link>
                    </li>
                </ul>
    </div>
  )
}

export default NavModal
