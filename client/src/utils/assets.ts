import LoginImage from '../assets/mariia-zakatiura-t7zYZzO_CX0-unsplash.jpg';
import Logo from '../assets/logo-no-background.svg';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillHome, AiFillCloseCircle } from 'react-icons/ai'
import { IoMdNotifications, IoMdAddCircle } from 'react-icons/io';
import { BiSolidMessageDetail, BiSolidUserCircle } from 'react-icons/bi';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';


const images = {
    login: LoginImage,
    logo: Logo
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
    closeIcon: AiFillCloseCircle
}

export { images, icons }; 