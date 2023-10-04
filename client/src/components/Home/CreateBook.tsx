import React, { Dispatch, SetStateAction } from 'react'
import { icons } from '../../utils/assets'
import { AddBook } from '..'


interface Props {
    setShowModal: Dispatch<SetStateAction<boolean>>
}


const CreateBook: React.FC<Props> = ({setShowModal}) => {
  return (
    <div className='absolute right-0 top-[4rem] md:top-[7rem] bg-primary w-content p-5'>
        <div className='flex items-center gap-[5vw] border-b-2 border-black pb-4'>
            <h1 className='text-2xl uppercase'>Add to Your Collection</h1>
            <icons.closeIcon
                className='cursor-pointer hover:scale-50 delay-100 text-2xl gap-2'
                onClick={() => setShowModal(false)}
            />
        </div>
        <AddBook />
    </div>
  )
}

const MermoisedCreateBook = React.memo(CreateBook)
export default MermoisedCreateBook
