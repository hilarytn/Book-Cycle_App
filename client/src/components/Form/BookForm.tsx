import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BookSchema } from '../../utils/schema';
import { BookFormType } from '../../utils/types/formType';
import usePostBook from '../../hooks/usePostBook';

const BookForm = () => {

    const { postBook } = usePostBook();
    const { handleSubmit, register, formState: { errors } } = useForm<BookFormType>({
      resolver: yupResolver(BookSchema)
    });

  const onSubmit = (data: BookFormType) => {
    postBook(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row items-center w-full justify-center md:justify-between gap-5 mb-8">
          <label className='text-secondary ms-3 text-lg' htmlFor="title">Title</label>
          <input
            className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
            type="text"
            id="title"
            placeholder='Title'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
          <label className='text-secondary ms-3 text-lg' htmlFor="author">Author</label>
          <input
            className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
            type="text"
            id="author"
            placeholder='Author'
            {...register('author', { required: true })}
          />
          {errors.author && <span className='text-red-500'>{errors.author.message}</span>}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
          <label className='text-secondary ms-3 text-lg' htmlFor="coverArtUrl">Cover Art</label>
          <input
            className='w-[280px] border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
            type="file"
            id="coverArtUrl"
            placeholder='Cover Art Url'
            {...register('coverArtUrl', { required: true })}
          />
          {errors.coverArtUrl && <span className='text-red-500'>{errors.coverArtUrl.message}</span>}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
          <label className='text-secondary ms-3 text-lg' htmlFor="description">Description</label>
          <textarea
            className='w-[280px] border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
            id="description"
            placeholder='Description'
            {...register('description', { required: true })}
          ></textarea>
          {errors.description && <span className='text-red-500'>{errors.description.message}</span>}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
          <label className='text-secondary ms-3 text-lg' htmlFor="genre">Genre</label>
          <input
            className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
            type="text"
            id="genre"
            placeholder='Genre'
            {...register('genre', { required: true })}
          />
          {errors.genre && <span className='text-red-500'>{errors.genre.message}</span>}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
          <label className='text-secondary ms-3 text-lg' htmlFor="availableStatus">Available Status</label>
          <select
            className='w-[280px] border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
            id="availableStatus"
            {...register('availableStatus', { required: true })}
          >
            <option value="">Select an option</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
          {errors.availableStatus && <span className='text-red-500'>{errors.availableStatus.message}</span>}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
          <label className='text-secondary ms-3 text-lg' htmlFor="condition">Book Condition</label>
          <select
            className='w-[280px] border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
            id="condition"
            {...register('condition', { required: true })}
          >
            <option value="">Select an option</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="old">Very Old</option>
          </select>
          {errors.condition && <span className='text-red-500'>{errors.condition.message}</span>}
        </div>

        <div className='text-center'>
          <button
            className='bg-secondary text-white font-semibold
                        hover:bg-black hover:scale-75 delay-100
                        tracking-wide rounded py-3 px-9 mt-8 mb-6'
            type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

const MemoizedBookForm = React.memo(BookForm);
export default MemoizedBookForm;
