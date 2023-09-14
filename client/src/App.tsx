import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { PrivateRoute } from "./components"
import { LoginPage } from "./pages"


const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
