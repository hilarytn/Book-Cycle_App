import { BookForm, Navbar } from "../../components"



const CreateBook = () => {
  return (
    <div className='w-full bg-gray-100'>
      <Navbar />
      <section>
        <div className='pt-[4rem] min-h-screen w-full flex justify-center items-center bg-profile-pattern bg-center bg-cover bg-blend-multiply bg-black/[.50]'>
          <div className='flex flex-col px-10 py-5 bg-white justify-center items-center gap-8'>
            <h1 className='text-secondary text-[50px] font-semibold'>Add Book</h1>
            <BookForm />
          </div>
        </div>
      </section>

    </div>
  )
}

export default CreateBook
