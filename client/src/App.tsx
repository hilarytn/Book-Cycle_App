import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { PrivateRoute } from "./components"
import { LoginPage, HomePage, ProfilePage, RegisterPage } from "./pages"


const App: React.FC = () => {


  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
