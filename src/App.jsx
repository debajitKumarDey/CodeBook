
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import AllPages from './Pages/AllPages'
import OnePage from './Pages/OnePage'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:'/pages',
      element:
      <div>
        <Navbar/>
        <AllPages/>
      </div>
    },
    {
      path:'/pages/:id',
      element:
      <div>
        <Navbar/>
        <OnePage/>
      </div>
    }
  ]
)
const App = () => {
  return (
    <div >
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
