import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [bestsellers, setBestsellers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4')
        const data = await response.json()
        setBestsellers(data)
      } catch (error) {
        console.error('Failed to fetch bestsellers:', error)
      }
    }

    fetchBestsellers()
  }, [])

  const goToProduct = (prodObj) => {
    navigate('/product', { state: { prodObj } })
  }

  return (
    <div className='text-center px-2 py-8'>
      <div 
        className="bg-cover bg-center h-96 text-white py-24 px-10 object-fill" 
        style={{backgroundImage: "url(https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)"}}
      >
        <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Welcome to Our Store</h1>
        <p className='text-lg sm:text-2xl max-w-3xl mx-auto mb-8'>
          Discover our amazing products. We have a wide selection of items for you. Shop now and find what you're looking for.
        </p>
        <button 
          onClick={() => navigate('/products')} 
          className='bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition duration-300'
        >
          Shop Now
        </button>
      </div>
      
      <div className='py-16'>
        <h2 className='text-3xl font-bold mb-8'>Best Sellers</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {bestsellers.map(product => (
            <div
              key={product.id}
              onClick={() => goToProduct(product)}
              className="border rounded-xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 sm:h-48 object-contain mb-4"
              />
              <h2 className="text-sm sm:text-base font-semibold line-clamp-2">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold mt-2">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
