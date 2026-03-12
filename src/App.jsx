import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Productlist from './components/Productlist'
import ContactUs from './components/ContactUs'
import Product from './components/Product'
import Home from './components/Home'

function App() {
  const routingObj=createBrowserRouter([
   { path:'/',
    element:<RootLayout/>,
    children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"products",
      element:<Productlist/>
    },
    {
      path:"contactus",
      element:<ContactUs/>
    },
    {
      path:"product",
      element:<Product/>
    }

  ]
}
])
  return <RouterProvider router={routingObj}/>
}

export default App
