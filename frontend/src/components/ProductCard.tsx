import React from 'react'
import { Button } from './ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useProductStore } from '@/store/product';
import { toast } from 'sonner';

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
    const {deleteProduct} = useProductStore();
    const handleDeleteProduct = async (pid: string) => {
        const {success, message} = await deleteProduct(pid);
        if(!success) {
            toast.error("Error", {
            description: message,
            closeButton: true
        })
        }
        else {
            toast.success("Success", {
            description: message,
            closeButton: true,

        })
        }
    }

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
                    <Button className='bg-blue-300' onClick={() => console.log("HEY")}><Pencil /></Button>
                    <Button className='bg-red-300' onClick={() =>handleDeleteProduct(product._id)}><Trash2 /></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard