import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { PrivateRoute, Navbar } from "./components"
import { LoginPage, HomePage } from "./pages"


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
