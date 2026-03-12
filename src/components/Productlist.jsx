import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductList() {

  const [productlist, setProductlist] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const goToProduct = (prodObj) => {
    navigate('/product', { state: { prodObj } })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setProductlist(data)
        setFilteredProducts(data) 
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const searchProduct = (e) => {
    e.preventDefault()
    const value = e.target[0].value.toLowerCase()
    const products = productlist.filter(product =>
      product.category.toLowerCase().includes(value)
    )
    setFilteredProducts(products)
    e.target.reset()
  }

  if (loading) {
    return <h1 className='text-2xl text-center mt-10'>Loading...</h1>
  }

  if (error) {
    return <h1 className='text-red-500 text-center mt-10'>{error}</h1>
  }

  return (
    <div className="py-8">

      <form onSubmit={searchProduct} className='flex justify-center mb-6'>
        <input
          type="text"
          className='border border-gray-300 rounded-md p-2 mx-2 sm:mx-4 w-full sm:w-[90%]'
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          Search
        </button>
      </form>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Product List
      </h1>

      {filteredProducts.length === 0 ? (
        <h1 className='text-center text-gray-500'>No products found</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
      )}

    </div>
  )
}

export default ProductList
