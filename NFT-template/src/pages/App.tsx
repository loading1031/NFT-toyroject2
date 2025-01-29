// 공통 레이아웃

//INTERNAL IMPORT
import { Footer, NavBar } from "../components/components-index"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>

  )
}

export default App
