import { useState } from 'react'

function ContactUs() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd handle form submission here (e.g., send to an API)
    setSubmitted(true)
  }

  return (
    <div className='max-w-4xl mx-auto p-4 sm:p-8'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center mb-8'>Contact Us</h1>
      
      {submitted ? (
        <div className='text-center p-8 bg-green-100 rounded-lg'>
          <h2 className='text-2xl text-green-800 font-semibold'>Thank you!</h2>
          <p className='text-gray-700 mt-2'>Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='bg-gray-100 p-8 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
            <p className='text-gray-600 mb-4'>
              Have questions or feedback? Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className='space-y-4'>
              <p className='flex items-center gap-2'>
                <span className='font-semibold'>Address:</span> 123 Shopping Lane, Commerce City, 12345
              </p>
              <p className='flex items-center gap-2'>
                <span className='font-semibold'>Email:</span> support@ourstore.com
              </p>
              <p className='flex items-center gap-2'>
                <span className='font-semibold'>Phone:</span> (123) 456-7890
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Full Name</label>
              <input
                type='text'
                id='name'
                required
                className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email Address</label>
              <input
                type='email'
                id='email'
                required
                className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                rows='4'
                required
                className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              ></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ContactUs
