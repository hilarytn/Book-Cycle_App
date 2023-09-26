
import PageEnum from '../../utils/enums'
import { Users, Navbar } from '../../components'
import useSetCurrentPage from '../../hooks/useSetCurrentPage'

const HomePage = () => {
    useSetCurrentPage(PageEnum.Home)

  return (
    <>
      <Navbar />
      <section>
        <div
          className='h-[70vh] flex justify-center items-center 
                    bg-hero-pattern bg-center bg-cover bg-blend-multiply bg-black/[.50]'
        >
          <div className='flex flex-col justify-center items-center gap-8'>
            <h1 className='text-3xl md:text-[50px] text-white font-bold tracking-wider capitalize'>
              Welcome to Book Cycle
            </h1>
            <p className='text-white text-sm md:text-[18px] tracking-wider'>
              Fostering Friendships through the Love of Books
            </p>
            <form className='flex gap-3'>
                <input
                      className='bg-gray-200 py-4 rounded-md tracking-wider px-2' 
                      type="search" />
                <button className='bg-secondary text-white px-4 py-2 rounded-md tracking-wider hover:bg-gray-800 hover:scale-75 delay-100 uppercase'>
                  Search
                </button>
            </form>
          </div>
        </div>
      </section>

      <Users />
    </>
  )
}

export default HomePage
