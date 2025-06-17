import { createBrowserRouter, RouterProvider } from 'react-router'
import PageComponentAdjustMent from './layout/PageComponentAdjustMent'
import Footer from './layout/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Destination from './pages/Destination'
import Trips from './pages/Tips'
import Tips from './pages/Tips'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageComponentAdjustMent />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/aboutus', element: <AboutUs /> },
        { path: '/contact', element: <Contact /> },
        { path: '/destination', element:  <Destination />},
        { path: '/tips', element: <Tips /> },
      ]
    }
  ])

  return (
    <div className='w-full max-w-[1438px] m-auto mt-2.5'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
