
import { images } from "../../utils/assets"
import { Login } from "../../components"


const LoginPage = () => {
  return (
    <div className="h-screen w-screen bg-primary flex justify-center items-center">
      <div className="md:flex w-screen md:w-max bg-white">
        <div>
            <img 
                className="md:w-96 h-full"
                src={images.login} 
                alt="login wallpaper" />
        </div>
        <div className="text-secondary font-serif p-8">
            <h3 className="font-semibold text-right text-xl">Sign Up</h3>
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-2xl font-bold tracking-wide">Log Into Your Account</h1>
                <h3 className="my-6 font-medium tracking-wider">Connect with others</h3>
            </div>
            <Login />
            <div className="text-center">
                <p
                    className="text-sm text-black
                    cursor-pointer underline hover:text-secondary
                    font-medium tracking-wide mx-[10%]"
                >
                    Click here if you already have an account</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
