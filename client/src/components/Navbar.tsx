import { useSelector } from 'react-redux' 
import { Link } from 'react-router-dom'

import { selectPage } from '../redux/features/userSlice'
import { images, icons } from '../utils/assets'
import PageEnum from '../utils/enums'


const Navbar = () => {

    const page = useSelector(selectPage)
    const activeStyling = 'bg-secondary text-white px-4 py-2 rounded-md tracking-wider uppercase flex items-center gap-1 tracking-wider cursor-pointer'
    

  return (
    <header className="fixed top-0 w-full bg-primary">
        <nav className="flex justify-around items-center w-[100%] px-8 py-3">
            <div>
                <img
                    className="w-[120px]"
                    src={images.logo} 
                    alt="nav icon" />
            </div>
            <div>
                <ul className='flex justify-center items-center gap-[3vw] text-[14px] text-black'>
                    <li>
                            <Link
                                className={page === PageEnum.Home ? activeStyling :`flex items-center gap-1 tracking-wider cursor-pointer hover:bg-secondary hover:text-white hover:p-2 rounded-md uppercase delay-100`}
                                to="/">
                                <icons.homeIcon 
                                    className='text-lg'
                                />
                                <p>Home</p>
                            </Link>
                    </li>
                    <li>
                        <Link
                            to="/messaging"
                            className={page === PageEnum.Messaging ? activeStyling :`flex items-center gap-1 tracking-wider cursor-pointer hover:bg-secondary hover:text-white hover:p-2 rounded-md uppercase delay-100`}
                        >
                            <icons.messageIcon 
                                className='text-lg'
                            />
                            Messaging
                        </Link>
                    </li>
                        <li>
                            <Link
                                to="/notifications"
                                className={page === PageEnum.Notification ? activeStyling :`flex items-center gap-1 tracking-wider cursor-pointer hover:bg-secondary hover:text-white hover:p-2 rounded-md uppercase delay-100`}
                            >
                                <icons.notificationIcon
                                    className='text-lg'
                                />
                                Notifications
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className={page === PageEnum.Profile ? activeStyling :`flex items-center gap-1 tracking-wider cursor-pointer hover:bg-secondary hover:text-white hover:p-2 rounded-md uppercase delay-100`}
                            >
                                <icons.userIcon 
                                    className='text-lg'
                                />
                                Profile
                            </Link>
                        </li>
                </ul>
            </div>
            <div>
                <button 
                    className='bg-black text-white px-4 py-2 rounded-md tracking-wider hover:bg-gray-800 hover:scale-75 delay-100 uppercase'
                    >
                    Logout
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
