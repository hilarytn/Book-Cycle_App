import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { PrivateRoute, Navbar } from "./components"
import { LoginPage, HomePage, ProfilePage } from "./pages"


const App: React.FC = () => {

  const isAuthenticated = true;

  return (
    <div>
      <Router>
      {isAuthenticated && <Navbar />}
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
