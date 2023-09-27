import { Link } from "react-router-dom"


import { images } from "../../utils/assets"
import { Login } from "../../components"


const LoginPage = () => {

  return (
    <div className="h-screen w-screen bg-primary flex justify-center items-center">
      <div className="md:flex w-screen md:w-max bg-white">
        <div>
            <img 
                className="md:w-[500px] h-full"
                src={images.login} 
                alt="login wallpaper" />
        </div>
        <div className="flex flex-col items-center justify-center text-secondary font-serif p-8">
            <img src={images.logo} className="w-[130px]" alt="app logo" />
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-2xl font-bold tracking-wide">Log Into Your Account</h1>
                <h3 className="my-6 font-medium tracking-wider">Connect with others</h3>
            </div>
            <Login />
            <div className="text-center">
                <Link
                    to="/register"
                    className="text-md text-black
                    cursor-pointer underline hover:text-secondary
                    font-medium tracking-wide"
                >
                    Create an account with us</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
