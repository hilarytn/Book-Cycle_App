import PageEnum from '../../utils/enums'
import useSetCurrentPage from '../../hooks/useSetCurrentPage'

import { images, icons } from '../../utils/assets'
import { UserBooks, Navbar } from '../../components'


const ProfilePage = () => {

    useSetCurrentPage(PageEnum.Profile)

  return (
    <>
      <Navbar />
        <section>
            <div
                className='h-[45vh] w-screen flex justify-center items-center
                            bg-primary'
            >
            </div>
            <div className='flex justify-center'>
                <img
                    className='w-[250px] h-[250px] rounded-2xl border-8 border-white absolute top-[35vh]'
                    src={images.login} alt="user-profile" />
                <div className='flex flex-col items-center mt-[20vh] md:mt-[16vh]'>
                    <h1 className='text-[40px] text-black font-bold tracking-wider capitalize'>
                        John Doe
                    </h1>
                    <p className='text-[16px] text-gray-700 tracking-wider'>
                      Lagos, Nigeria
                    </p>
                </div>
            </div>
      </section>
      <section className='my-11 py-6'>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col justify-center items-center border-e-2'>
            <span className='text-xl md:text-4xl'>200</span>
            <span className='text-sm md:text-lg text-gray-700 mx-2'>Books Owned</span>
          </div>
          <div className='flex flex-col justify-center items-center border-e-2'>
            <span className='text-xl md:text-4xl'>200</span>
            <span className='text-sm md:text-lg text-gray-700 mx-2'>Books Borrowed</span>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-xl md:text-4xl'>200</span>
            <span className='text-sm md:text-lg text-gray-700 mx-2'>Books Returned</span>
          </div>
        </div>

        <div className='mt-10 flex flex-col items-center justify-center text-secondary cursor-pointer hover:text-blue-700 delay-100'>
          <icons.addIcon className='w-16 h-16' />
          <span className='text-lg tracking-wider'>Add Book</span>
        </div>
      </section>
      <section>
        <UserBooks />
      </section>
    </>
  )
}

export default ProfilePage
