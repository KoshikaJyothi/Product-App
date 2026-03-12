import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function Product() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const product = state?.prodObj

  if (!product) {
    return (
      <div className='text-center mt-14'>
        <h1 className='text-2xl mb-4'>Product not found</h1>
        <button onClick={() => navigate('/products')} className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          Back to Products
        </button>
      </div>
    )
  }

  return (
    <div className='flex flex-col sm:flex-row gap-8 mt-10 px-2'>
      <div className='w-full sm:w-2/5 flex justify-center'>
        <img src={product.image} className='max-h-80 object-contain' alt={product.title} />
      </div>
      <div className='w-full sm:w-3/5 p-2'>
        <p className='text-xl sm:text-2xl mb-4 font-semibold'>{product.title}</p>
        <p className='mb-4 text-gray-600'>{product.description}</p>
        <p className='text-2xl sm:text-3xl mb-4 text-green-600 font-bold'>${product.price}</p>
        <p className='text-base sm:text-lg mb-4 capitalize'><span className='font-medium'>Category:</span> {product.category}</p>
      </div>
    </div>
  )
}

export default Product
