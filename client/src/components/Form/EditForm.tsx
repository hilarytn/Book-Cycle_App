import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { editProfileSchema } from '../../utils/schema'
import { EditFormType } from '../../utils/types/formType'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '../../redux/features/userSlice'
import useEditUser from '../../hooks/useEditUser'

const EditForm = () => {


    const user = useSelector(selectAuthUser)
    const { editUser } = useEditUser()

    const { register, handleSubmit, formState: { errors } } = useForm<EditFormType>({
        resolver: yupResolver(editProfileSchema)
    });

    const onSubmit = (data: EditFormType) => {
        editUser(user?._id, data)
    }


    return (
        <div className='flex justify-center items-center mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row items-center w-full justify-center md:justify-between gap-5 mb-8">
                    <label
                        className='text-secondary ms-3 text-lg'
                        htmlFor="firstName">First Name</label>
                    <input
                        className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                        type="firstName"
                        id="firstName"
                        defaultValue={user?.firstName}
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName && <span className='text-red-500'>{errors.firstName.message}</span>}
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
                    <label
                        className='text-secondary ms-3 text-lg'
                        htmlFor="lastName">Last Name</label>
                    <input
                        className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                        type="lastName"
                        id="lastName"
                        defaultValue={user?.lastName}
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName && <span className='text-red-500'>{errors.lastName.message}</span>}
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
                    <label
                        className='text-secondary ms-3 text-lg'
                        htmlFor="address">Address</label>
                    <input
                        className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                        type="address"
                        id="address"
                        defaultValue={user?.address}
                        {...register("address", { required: true })}
                    />
                    {errors.address && <span className='text-red-500'>{errors.address.message}</span>}
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
                    <label
                        className='text-secondary ms-3 text-lg'
                        htmlFor="phoneNumber">Phone Number</label>
                    <input
                        className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                        type="phoneNumber"
                        id="phoneNumber"
                        defaultValue={user?.phoneNumber}
                        {...register("phoneNumber", { required: true })}
                    />
                    {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
                    <label
                        className='text-secondary ms-3 text-lg'
                        htmlFor="email">Email</label>
                    <input
                        className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                        type="email"
                        id="email"
                        defaultValue={user?.email}
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5 w-full justify-center md:justify-between mb-8">
                    <label
                        className='text-secondary ms-3 text-lg'
                        htmlFor="username">Username</label>
                    <input
                        className='border-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                        type="username"
                        id="username"
                        defaultValue={user?.username}
                        {...register("username", { required: true })}
                    />
                    {errors.username && <span className='text-red-500'>{errors.username.message}</span>}
                </div>
                <div className='text-center'>
                <button 
                        className='bg-secondary text-white font-semibold
                                    hover:bg-black hover:scale-75 delay-100
                                    tracking-wide rounded py-3 px-9 mt-8 mb-6'
                        type="submit">
                            Update Profile</button>
            </div>
            </form>
        </div>
    )
}


const MermoisedEditForm = React.memo(EditForm)
export default MermoisedEditForm
