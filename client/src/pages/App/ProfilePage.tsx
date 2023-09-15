import PageEnum from '../../utils/enums'
import useSetCurrentPage from '../../hooks/useSetCurrentPage'

import { images, icons } from '../../utils/assets'


const ProfilePage = () => {

    useSetCurrentPage(PageEnum.Profile)

  return (
    <>
        <section>
            <div
                className='h-[60vh] w-screen flex justify-center items-center bg-profile-pattern
                            bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/40'
            >
            </div>
            <div className='flex justify-center'>
                <img
                    className='w-[250px] h-[250px] rounded-full border-8 border-white absolute top-[47vh] left-[22vw] md:left-[36vw] lg:left-[42vw]'
                    src={images.login} alt="user-profile" />
                    <button 
                        className='text-white bg-blue-300 p-2 rounded-lg flex items-center gap-1
                                    hover:bg-blue-400 hover:scale-105 delay-100 capitalize
                                      mt-[16vh]  md:mt-[12vh]'>
                        <icons.editIcon />
                        <span>change photo</span>
                    </button>
            </div>
      </section>
    </>
  )
}

export default ProfilePage
