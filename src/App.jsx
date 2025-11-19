import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="text-black bg-white">
      <Header></Header>
      <div className="mt-15 ">
        <div className="min-h-screen flex items-center justify-center">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
