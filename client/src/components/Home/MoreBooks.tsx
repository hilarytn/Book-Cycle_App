import { dummyBooks } from "../../utils/dummyData"

interface Props {
    setMoreBooks: React.Dispatch<React.SetStateAction<boolean>>
}

const MoreBooks: React.FC<Props> = ({setMoreBooks}) => {
  return (
<section className="md:p-12">
            <div className='flex justify-between items-center my-10 px-6 md:ps-20'>
                <h1 className='text-lg md:text-2xl text-black font-bold tracking-wider capitalize'>
                    Find more books
                </h1>
                <p 
                    onClick={() => setMoreBooks(false)}
                    className='text-secondary md:text-[18px] tracking-wider underline cursor-pointer hover:scale-150'>
                    Go back
                </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                {dummyBooks.map((book, index) => (
                    <div key={index} className='flex flex-col justify-center items-center gap-4'>
                        <img
                            className='w-[200px] h-[300px] object-cover rounded-md'
                            src={book.coverUrl} 
                            alt="book cover" />
                        <p className='text-black text-[18px] tracking-wider'>
                            {book.title}
                        </p>
                        <p className='text-secondary text-[18px] tracking-wider'>
                            {book.author}
                        </p>
                        <div>
                            <button className='bg-secondary text-white px-4 py-2 rounded-md tracking-wider hover:bg-gray-800 hover:scale-75 delay-100 uppercase'>
                                Chat with owner
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
  )
}

export default MoreBooks
