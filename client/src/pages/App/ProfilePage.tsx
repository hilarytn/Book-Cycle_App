import PageEnum from '../../utils/enums'
import useSetCurrentPage from '../../hooks/useSetCurrentPage'

import { images, icons } from '../../utils/assets'


const ProfilePage = () => {

    useSetCurrentPage(PageEnum.Profile)

  return (
    <>
        <section>
            <div
                className='h-[60vh] w-screen flex justify-center items-center 
                        bg-gradient-to-r from-secondary to-black/80 bg-blend-multiply'
            >
            </div>
            <div>
                <img
                    className='w-[250px] h-[250px] rounded-full border-8 border-white absolute top-[47vh] left-[20vw] md:left-[35vw] lg:left-[40vw]'
                    src={images.login} alt="user-profile" />
                    <button 
                        className='text-white bg-blue-300 p-2 rounded-lg flex items-center gap-1
                                    hover:bg-blue-400 hover:scale-105 delay-100 capitalize
                                    absolute top-[75vh] md:top-[72vh] lg:top-[78vh] left-[35vw] md:left-[42vw] lg:left-[45vw]'>
                        <icons.editIcon />
                        <span>change photo</span>
                    </button>
            </div>
      </section>
    </>
  )
}

export default ProfilePage
