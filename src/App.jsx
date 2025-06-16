import { createBrowserRouter, RouterProvider } from "react-router"
import PageComponentAdjustMent from "./layout/PageComponentAdjustMent"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"



function App() {
const Router = createBrowserRouter([
{path:'/', element:<PageComponentAdjustMent/>, children:[
  {path:'/', element:<Home/>}, {path:'/about', element:<AboutUs/>}
]}

])

  return (
    <div className="w-full max-w-300 m-auto">
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
