import React from 'react'
import { Button } from './ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useColorMode } from '@/contexts/ThemeContext';

type Product = {
  _id: string;
  name: string;
  image: string;
  price: string;
  // Add other fields as needed
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-white dark:bg-gray-800'>
        <img src={product.image} alt={product.name} className='h-48 w-full object-cover' />
        <div className='p-4'>
            <div>
                <div className='text-2xl mb-2'>
                    {product.name}
                </div>
                <div className='font-bold text-xl mb-4 text-gray-600 dark:text-gray-200'>
                    ${product.price}
                </div>
                <div className='flex flex-row space-x-2'>
                    <Button className='bg-blue-300'><Pencil /></Button>
                    <Button className='bg-red-300'><Trash2 /></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard