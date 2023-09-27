import PageEnum from '../../utils/enums'
import useSetCurrentPage from '../../hooks/useSetCurrentPage'
import { icons } from '../../utils/assets'
import { Navbar } from '../../components'
import Default from '../../assets/henry-be-TCsCykbwSJw-unsplash.jpg';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/features/userSlice';
import { Link } from 'react-router-dom'


const ProfilePage = () => {

    useSetCurrentPage(PageEnum.Profile)
    const user = useSelector(selectAuthUser)

    return (
      <>
          <Navbar />
          <div className='flex flex-col items-center my-[10rem]'>
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
                      <div className='flex justify-center gap-4 items-center'>
                          <Link
                              to="/edit-profile"
                              className='bg-blue-600 hover:scale-90 delay-100 p-4 rounded-full text-white tracking-wide'>Edit Profile</Link>
                          <Link
                              to="/add-book"
                              className='bg-green-600 hover:scale-90 delay-100 p-4 rounded-full text-white tracking-wide'>Add Book</Link>
                      </div>
                  </div>
              </div>
  
  
              <div className='flex lg:flex-row flex-col gap-10 justify-center my-[4rem]'>
                  <div className='flex h-fit items-center gap-2 mt-10 text-gray-700 text-[27px]'>
                      <p>Books ({user?.books.length})</p>
                      <icons.arrowIcon
                          className='transform rotate-90 lg:rotate-0'
                      />
                  </div>
                  <div className='grid gap-5 grid-cols-2 lg:grid-cols-4'>
                      {user && user.books.length > 0 ? user.books.map((book, index) => (
                          <img key={index} className='w-[250px] h-[250px]' src={book.coverArtUrl} alt="Books" />
                      )) : (
                          <p className='lg:mt-9 text-red-700 col-span-2 text-[30px]'>User has no books</p>
                      )}
                  </div>
              </div>
          </div>
      </>
    )
}

export default ProfilePage
