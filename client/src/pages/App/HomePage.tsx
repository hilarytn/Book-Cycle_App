import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { setCurrentPage } from '../../redux/features/userSlice'
import PageEnum from '../../utils/enums'
import { Books, MoreBooks } from '../../components'

const HomePage = () => {
    const dispatch = useDispatch()
    const [moreBooks, setMoreBooks] = useState<boolean>(false)

    useEffect(() => {
        dispatch(setCurrentPage(PageEnum.Home))
    },[dispatch])

  return (
    <>
      <section>
      <div
          className='h-[70vh] w-screen flex justify-center items-center 
                    bg-hero-pattern bg-center bg-cover bg-blend-multiply bg-black/[.50]'
        >
          <div className='flex flex-col justify-center items-center gap-8'>
            <h1 className='text-[60px] text-white font-bold tracking-wider capitalize'>
              Welcome to Book Cycle
            </h1>
            <p className='text-white text-[18px] tracking-wider'>
              Fostering Friendships through the Love of Books
            </p>
            <form className='flex gap-3'>
                <input
                      className='bg-gray-200 px-4 py-4 rounded-md tracking-wider' 
                      type="search" />
                <button className='bg-secondary text-white px-4 py-2 rounded-md tracking-wider hover:bg-gray-800 hover:scale-75 delay-100 uppercase'>
                  Search
                </button>
            </form>
          </div>
        </div>
      </section>

      {moreBooks ? (
        <MoreBooks setMoreBooks={setMoreBooks} />
      ) : (
        <Books setMoreBooks={setMoreBooks}/>
      )}
    </>
  )
}

export default HomePage
