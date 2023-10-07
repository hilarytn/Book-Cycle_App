import { Navbar } from "../../components"
// import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { selectUser, selectAuthUser } from "../../redux/features/userSlice"
import { icons } from "../../utils/assets"


const ChatPage = () => {

  const user = useSelector(selectUser)
  const authUser = useSelector(selectAuthUser)

  return (
    <div>
        <Navbar />
        <div className="w-screen h-screen flex flex-col">
            <div
              
            >
                <div className="flex items-center justify-center h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-300">
                            <icons.userIcon/>
                        </div>
                        <div className="ml-4 font-bold text-gray-500">{user?.firstName} {user?.lastName}</div>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-4 bg-gray-100 flex flex-col-reverse overflow-y-auto">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-start">
                    <div className="bg-gray-300 text-gray-700 rounded-lg p-2">
                      <p>Hello, how can I help you?</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-end">
                    <div className="bg-blue-500 text-white rounded-lg p-2">
                      <p>Can you provide more information?</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="bg-white p-4">
              <div className="flex items-center">
                <input type="text" placeholder="Type your message..." className="flex-1 border rounded-lg p-2" />
                <button className="ml-2 bg-blue-500 text-white rounded-full p-2">
                  Send
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ChatPage
