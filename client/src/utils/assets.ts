import LoginImage from '../assets/mariia-zakatiura-t7zYZzO_CX0-unsplash.jpg';
import Logo from '../assets/logo-no-background.svg';

import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io';
import { BiSolidMessageDetail, BiSolidUserCircle } from 'react-icons/bi';

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
    userIcon: BiSolidUserCircle
}

export { images, icons }; 