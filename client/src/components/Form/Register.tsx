import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

import { RegisterForm } from '../../utils/types/formType';
import { icons } from '../../utils/assets';
import { registerSchema } from '../../utils/schema';
import useAuth from '../../hooks/useAuth';


const Register = () => {

    const { registerUser } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
        resolver: yupResolver(registerSchema)
    });
    const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
        registerUser(data);
    };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-8">
                <icons.emailIcon 
                    className='absolute mt-[15px] ms-3 text-lg'
                />
                <input
                    className='border-b-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="email"
                    id="email"
                    placeholder='Email'
                    {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            </div>
            <div className="flex flex-col mb-8">
                <icons.profileIcon 
                    className='absolute mt-[15px] ms-3 text-lg'
                />
                <input
                    className='border-b-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="username"
                    id="username"
                    placeholder='Username'
                    {...register("username", { required: true })}
                />
                {errors.username && <span className='text-red-500'>{errors.username.message}</span>}
            </div>
            <div className="flex flex-col mb-8">
                <icons.identityIcon 
                    className='absolute mt-[15px] ms-3 text-lg'
                />
                <input
                    className='border-b-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="firstName"
                    id="firstName"
                    placeholder='First Name'
                    {...register("firstName", { required: true })}
                />
                {errors.firstName && <span className='text-red-500'>{errors.firstName.message}</span>}
            </div>
            <div className="flex flex-col mb-8">
                <icons.identityIcon 
                    className='absolute mt-[15px] ms-3 text-lg'
                />
                <input
                    className='border-b-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="lastName"
                    id="lastName"
                    placeholder='Last Name'
                    {...register("lastName", { required: true })}
                />
                {errors.lastName && <span className='text-red-500'>{errors.lastName.message}</span>}
            </div>
            <div className="flex flex-col mb-8">
                <icons.phoneIcon 
                    className='absolute mt-[15px] ms-3 text-lg'
                />
                <input
                    className='border-b-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="phoneNumber"
                    id="phoneNumber"
                    placeholder='Phone Number'
                    {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
            </div>
            <div className="flex flex-col mb-8">
                <icons.locationIcon 
                    className='absolute mt-[15px] ms-3 text-lg'
                />
                <input
                    className='border-b-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="address"
                    id="address"
                    placeholder='Address'
                    {...register("address", { required: true })}
                />
                {errors.address && <span className='text-red-500'>{errors.address.message}</span>}
            </div>
            <div className="flex flex-col">
                <icons.passwordIcon
                    className='absolute mt-[15px] ms-3 text-lg'
                    />
                <input
                    className='border-b-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="password"
                    id="password"
                    placeholder='Password'
                    {...register("password", { required: true })}
                />
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>
            <div className="flex flex-col mt-[30px]">
                <icons.passwordIcon
                    className='absolute mt-[15px] ms-3 text-lg'
                    />
                <input
                    className='border-b-2 border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="password"
                    id="confirmPassword"
                    placeholder='Confirm Password'
                    {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
            </div>
            <div className='text-center'>
                <button 
                        className='bg-secondary text-white font-semibold
                                    hover:bg-black hover:scale-75 delay-100
                                    tracking-wide rounded py-3 px-9 mt-8 mb-6'
                        type="submit">
                            Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default Register
