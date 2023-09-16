import { dummyBooks } from "../../utils/dummyData"


const UserBooks = () => {
    
  return (
    <>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-11">
            {dummyBooks.map((book, index) => (
            <div key={index} className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                <img className="w-full h-40 object-cover" src={book.coverUrl} alt="Book Cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <p className="text-gray-800 text-base">{book.description}</p>
                  <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Update</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
                  </div>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default UserBooks
