import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./components"



const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<div>Home</div>} />
          </Route>
          <Route path="/login" element={<div>Login</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
