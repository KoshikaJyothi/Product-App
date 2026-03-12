import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
     <Header/>
     <div className='mx-4 sm:mx-10 md:mx-20 min-h-screen'>
        <Outlet/>
        </div>
   <Footer/>

    </div>
  )
}

export default RootLayout
