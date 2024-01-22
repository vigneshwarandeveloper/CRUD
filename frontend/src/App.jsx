import {BrowserRouter,Routes,Route} from "react-router-dom"
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import Update from "./pages/Update";
import Navbar from "./components/Navbar";

function App() {
  return (
    <> 
    <BrowserRouter>
  <Navbar />
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/create" element={<CreateUser/>} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
