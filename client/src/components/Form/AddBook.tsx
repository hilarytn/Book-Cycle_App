import React, {useRef} from 'react'
import usePostBook from '../../hooks/usePostBook'
import { BookFormType } from '../../utils/types/formType';


const AddBook = () => {

    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const genreRef = useRef<HTMLSelectElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const coverArtUrlRef = useRef<HTMLInputElement>(null);
    const availableStatusRef = useRef<HTMLSelectElement>(null);
    const conditionRef = useRef<HTMLSelectElement>(null);

    const { postBook } = usePostBook();
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const bookData: BookFormType = {
            title: titleRef.current?.value,
            author: authorRef.current?.value,
            genre: genreRef.current?.value,
            description: descriptionRef.current?.value,
            availableStatus: availableStatusRef.current?.value,
            condition: conditionRef.current?.value,
            coverArtUrl: undefined
        }

        if (coverArtUrlRef.current?.files?.length) {
            bookData.coverArtUrl = coverArtUrlRef.current?.files[0]
        }

        console.log(bookData);
        postBook(bookData);
    };

  return (
    <div className='mt-6'>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center w-full justify-center md:justify-between gap-5 mb-8">
            <label
                className='text-secondary ms-3 text-lg'
                htmlFor="title">Title</label>
            <input
                className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                type="text"
                id="title"
                ref={titleRef}
            />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
            <label
                className='text-secondary ms-3 text-lg'
                htmlFor="author">Author</label>
            <input
                className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                type="text"
                id="author"
                ref={authorRef}
            />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
            <label
                className='text-secondary ms-3 text-lg'
                htmlFor="genre">Genre</label>
            <select
                ref={genreRef}
                className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-11'
                name="genre" 
                id="genre">
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="biography">Biography</option>
                <option value="memoir">Comics</option>
                <option value="self-help">Self-Help</option>
                <option value="self-help">Business & Economics</option>
                <option value="history">History</option>
                <option value="education">Education</option>
                <option value="literature">Literature & Poetry</option>
            </select>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
            <label
                className='text-secondary ms-3 text-lg'
                htmlFor="description">Description</label>
            <textarea
                ref={descriptionRef}
                className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-8'
            >
            </textarea>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
            <label
                className='text-secondary ms-3 text-lg'
                htmlFor="image">Cover Art</label>
            <input
                className='border-2 border-secondary placeholder:text-secondary rounded py-3 w-[280px]'
                type="file"
                id="image"
                ref={coverArtUrlRef}
            />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
            <label
                className='text-secondary ms-3 text-lg'
                htmlFor="condition">Condition</label>
            <select
                ref={conditionRef}
                className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-[60px]'
                name="condition" 
                id="condition">
                <option value="new">New</option>
                <option value="very-good">Very Good</option>
                <option value="good">Good</option>
                <option value="acceptable">Acceptable</option>
                <option value="readable">Readable</option>
                <option value="damaged">Damaged</option>
                <option value="rare">Rare & Collectable</option>
            </select>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
            <label
                className='text-secondary ms-3 text-lg'
                htmlFor="genre">Availabity Status</label>
            <select
                ref={availableStatusRef}
                className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-[80px]'
                name="availableStatus"
                id="availableStatus">
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
            </select>
        </div>
        <div className="flex justify-center">
            <button
                type='submit'
                className='bg-secondary hover:scale-90 delay-100 p-4 rounded-2xl text-white tracking-wide'>Add Book</button>
        </div>
      </form>
    </div>
  )
}


const MermoisedAddBook = React.memo(AddBook)
export default MermoisedAddBook
