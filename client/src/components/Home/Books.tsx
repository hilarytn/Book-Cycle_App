
import { dummyBooks } from "../../utils/dummyData"


interface Props {
    setMoreBooks: React.Dispatch<React.SetStateAction<boolean>>
}

const Books: React.FC<Props> = ({setMoreBooks}) => {


  return (
    <>
        <section className="md:p-12">
            <div className='flex justify-between items-center my-10 px-6 md:ps-20'>
                <h1 className='text-xl md:text-2xl text-black font-bold tracking-wider capitalize'>
                    Recommended for you
                </h1>
                <p 
                    onClick={() => setMoreBooks(true)}
                    className='text-secondary md:text-[18px] tracking-wider underline cursor-pointer hover:scale-150'>
                    View More
                </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            {dummyBooks.map((book, index) => (
                <div key={index} className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                    <img className="w-full h-40 object-cover" src={book.coverUrl} alt="Book Cover" />
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                      <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                      <p className="text-gray-800 text-base">{book.description}</p>
                      <div className="mt-4 flex gap-3">
                        <button className="px-4 py-2 bg-secondary text-white rounded hover:bg-green-700">Chat Owner</button>
                      </div>
                    </div>
                </div>
            ))}
            </div>
        </section>

        <hr className="mt-6" />

        <section className="md:p-12">
            <div className='flex justify-between items-center my-10 px-6 md:ps-20'>
                <h1 className='text-xl md:text-2xl text-black font-bold tracking-wider capitalize'>
                    Latest books
                </h1>
                <p 
                    onClick={() => setMoreBooks(true)}
                    className='text-secondary md:text-[18px] tracking-wider underline cursor-pointer hover:scale-150'>
                    View More
                </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                {dummyBooks.map((book, index) => (
                    <div key={index} className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                        <img className="w-full h-40 object-cover" src={book.coverUrl} alt="Book Cover" />
                        <div className="p-4">
                          <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                          <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                          <p className="text-gray-800 text-base">{book.description}</p>
                          <div className="mt-4 flex gap-3">
                            <button className="px-4 py-2 bg-secondary text-white rounded hover:bg-green-700">Chat Owner</button>
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Books
