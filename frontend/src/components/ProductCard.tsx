import React, { useState } from 'react'
import { Button } from './ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useProductStore } from '@/store/product';
import { toast } from 'sonner';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';

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
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const {deleteProduct, updateProduct} = useProductStore();
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

    const handleUpdateProduct = async (pid: string, updatedProduct: Product) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        if(!success) {
            toast.error("Error", {
            description: message,
            closeButton: true
            })
        }
        else {
            toast.success("Success", {
            description: "Product updated sucessfully",
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
                    <Dialog>
                        <DialogTrigger><Button className='bg-blue-300'><Pencil /></Button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Update Product</DialogTitle>
                            </DialogHeader>
                            <div className='flex flex-col space-y-4'>
                                <Input placeholder='Product Name' name='name' value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value})}/> 
                                <Input placeholder='Price' name='price' type='number' value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value})}/>
                                <Input placeholder='Image URL' name='image' value={updatedProduct.image} onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})}/>
                            </div>
                            <DialogFooter>
                                <DialogClose><Button className='mr-3' onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button></DialogClose>
                                <DialogClose asChild><Button variant='ghost'>Close</Button></DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Button className='bg-red-300' onClick={() =>handleDeleteProduct(product._id)}><Trash2 /></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard