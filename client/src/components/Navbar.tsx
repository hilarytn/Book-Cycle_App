import { useSelector } from 'react-redux' 
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { selectPage } from '../redux/features/userSlice'
import { images, icons } from '../utils/assets'
import PageEnum from '../utils/enums'
import { NavModal } from '.'


const Navbar = () => {

    const page = useSelector(selectPage)
    const activeStyling = 'bg-secondary text-white px-4 py-2 tracking-wider uppercase flex items-center gap-1 tracking-wider cursor-pointer'
    const [dropDown, setDropDown] = useState(false)

    const toggleDropDown = () => {
        setDropDown(!dropDown)
    }
    

  return (
    <header className="fixed top-0 w-screen bg-primary">
        <nav className="flex justify-around items-center px-8 py-3">
            <div>
                <img
                    className="w-[120px]"
                    src={images.logo} 
                    alt="nav icon" />
            </div>
            <div>
                <ul className='hidden md:flex justify-center items-center gap-3 lg:gap-[3vw] text-[14px] text-black'>
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
            <div className='hidden md:block'>
                <button 
                    className='bg-black text-white px-4 py-2 rounded-md tracking-wider hover:bg-gray-800 hover:scale-75 delay-100 uppercase'
                    >
                    Logout
                </button>
            </div>

            {/* nav drop down */}
            <div
                className='md:hidden'
                onClick={() => toggleDropDown()}
            >
                {!dropDown ? (
                    <button className='md:hidden text-3xl'>
                        <icons.navIcon
                        />
                    </button>
                ) : (
                    <button className='md:hidden text-3xl'>
                        <icons.closeIcon
                        />
                    </button>
                )}
            </div>
            {/* end of nav icon */}
        </nav>

        {/* nav modal */}
        {dropDown && (
            <NavModal />
        )}
    </header>
  )
}

export default Navbar
