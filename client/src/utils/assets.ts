import LoginImage from '../assets/mariia-zakatiura-t7zYZzO_CX0-unsplash.jpg';
import Logo from '../assets/logo-no-background.svg';
import DarkLogo from '../assets/cartoonreader.jpg'

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillHome, AiFillCloseCircle } from 'react-icons/ai'
import { IoMdNotifications, IoMdAddCircle } from 'react-icons/io';
import { BiSolidMessageDetail, BiSolidUserCircle } from 'react-icons/bi';
import { BsFillPencilFill, BsTelephonePlusFill, BsPersonVcardFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6'
import { IoLogOutSharp } from 'react-icons/io5'
import { ImBooks } from 'react-icons/im'
import { CgArrowLongRightC } from 'react-icons/cg'
import { ImExit } from 'react-icons/im'


const images = {
    login: LoginImage,
    logo: Logo,
    darkLogo: DarkLogo
}

const icons = {
    emailIcon: MdEmail,
    passwordIcon: RiLockPasswordFill,
    homeIcon: AiFillHome,
    notificationIcon: IoMdNotifications,
    messageIcon: BiSolidMessageDetail,
    userIcon: BiSolidUserCircle,
    editIcon: BsFillPencilFill,
    addIcon: IoMdAddCircle,
    navIcon: FiMenu,
    closeIcon: AiFillCloseCircle,
    profileIcon: FaUserCircle,
    locationIcon: FaLocationDot,
    phoneIcon: BsTelephonePlusFill,
    identityIcon: BsPersonVcardFill,
    logoutIcon: IoLogOutSharp,
    bookIcon: ImBooks,
    arrowIcon: CgArrowLongRightC,
    exitIcon: ImExit
}

export { images, icons }; 