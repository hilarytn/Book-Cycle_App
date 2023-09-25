import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'


import { LoginForm } from '../../utils/types/formType';
import { icons } from '../../utils/assets';
import { loginSchema } from '../../utils/schema'
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { loginUser } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: yupResolver(loginSchema)
    });
    const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        loginUser(data);
    };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-8">
                <icons.emailIcon 
                    className='absolute mt-[15px] ms-3 text-lg'
                />
                <input
                    className='border-b border-secondary placeholder:text-secondary rounded py-3 px-9'
                    type="email"
                    id="email"
                    placeholder='Email'
                    {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
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
            <div className='text-center'>
                <button 
                        className='bg-secondary text-white font-semibold
                                    hover:bg-black hover:scale-75 delay-100
                                    tracking-wide rounded py-3 px-9 mt-8 mb-6'
                        type="submit">
                            Sign In</button>
            </div>
        </form>
    </div>
  )
}

export default Login
