import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.scss'
import Layout from './layout/Layout'
import HomePage from './routes/homePage/HomePage'
import ProfilePage from './routes/profile/ProfilePage'
import ListPage from './routes/list/ListPage'
import SinglePage from './routes/singlePage/SinglePage'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
          path:'/profile',
          element:<ProfilePage/>
        },
        {
          path:'/list',
          element:<ListPage/>
        },
        {
          path:'/:id',
          element:<SinglePage/>
        }
      ]
    }
  ])


  return <RouterProvider router={router} />
}

export default App
