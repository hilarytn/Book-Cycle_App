import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

import { LoginForm } from '../../utils/types/formType';
import { icons } from '../../utils/assets';
import { loginSchema } from '../../utils/schema'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: yupResolver(loginSchema)
    });
    const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-8">
                <icons.emailIcon 
                    className='absolute mt-[14px] ms-3 text-lg'
                />
                <input
                    className='bg-primary placeholder:text-secondary rounded py-3 px-9'
                    type="email"
                    id="email"
                    placeholder='Email'
                    {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            </div>
            <div className="flex flex-col">
                <icons.passwordIcon
                    className='absolute mt-[14px] ms-3 text-lg'
                    />
                <input
                    className='bg-primary placeholder:text-secondary rounded py-3 px-9'
                    type="password"
                    id="password"
                    placeholder='Password'
                    {...register("password", { required: true })}
                />
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>
            <button 
                    className='bg-secondary text-white font-semibold
                                hover:bg-black hover:scale-75 delay-100
                                tracking-wide mx-[30%] rounded py-3 px-9 mt-8 mb-6'
                    type="submit">
                        Sign In</button>
        </form>
    </div>
  )
}

export default Login
