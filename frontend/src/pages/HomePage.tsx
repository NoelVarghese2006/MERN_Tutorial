import ProductCard from '@/components/ProductCard';
import { useProductStore } from '@/store/product'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);
  console.log(products)

  return (
    <div className='py-12'>
      <div className='flex flex-col space-y-8'>
        <div className='text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center'>
          Current Products 🚀
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className='flex justify-center text-xl text-center font-bold text-gray-500'>
            No producst found 😔&nbsp;
            <Link to={"/create"}>
              <div className='text-blue-500 hover:underline'>
                Create a Product
              </div>
            </Link>
          </div>
        )}

        
      </div>
    </div>
  )
}

export default HomePage