import PageEnum from '../../utils/enums'
import useSetCurrentPage from '../../hooks/useSetCurrentPage'
import { icons } from '../../utils/assets'
import { Navbar } from '../../components'
import Default from '../../assets/henry-be-TCsCykbwSJw-unsplash.jpg';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/features/userSlice';
import { EditForm } from '../../components';


const EditProfilePage = () => {

    useSetCurrentPage(PageEnum.EditProfile)
    const user = useSelector(selectAuthUser)


  return (
    <>
        <Navbar />
        <div className='flex flex-col items-center mt-[8rem]'>
            <div className='flex flex-wrap items-center justify-center gap-10'>
                <div>
                    <img src={Default} alt="Profile Image" className="rounded-full h-[150px] w-[150px] mx-auto mb-4" />
                </div>
                <div className='flex flex-col text-center gap-3 text-gray-700'>
                    <h2 className='text-[24px] tracking-wide'>{user?.firstName} {user?.lastName}</h2>
                    <div className='flex flex-wrap items-center justify-center gap-10'>
                        <div className='flex items-center justify-center gap-2'>
                            <icons.locationIcon/>
                            <p>{user?.address}</p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <icons.emailIcon/>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <EditForm />
    </>
  )
}

export default EditProfilePage
