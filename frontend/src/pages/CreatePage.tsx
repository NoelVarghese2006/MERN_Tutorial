import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useProductStore } from '@/store/product';
import React, { useState } from 'react'
import { toast } from 'sonner';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);
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
    setNewProduct({name: "", price: "", image: ""});
  }

  return (
    <div>
      <div className='flex flex-col space-y-8 justify-center'>
        <div className='text-2xl text-center mb-8'>Create New Product</div>
          <div className='w-[50vw] mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
            <div className='flex flex-col space-y-4'>
              <Input placeholder='Product Name' name='name' value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}/>
              <Input placeholder='Price' type='number' name='price' value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}/>
              <Input placeholder='Image URL' name='image' value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}/>
              <Button className='w-full bg-blue-300' onClick={handleAddProduct}>Add Product</Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CreatePage